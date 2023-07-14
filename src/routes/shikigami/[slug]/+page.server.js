/** @type {import('./$types').PageServerLoad} */

export async function load({ params, fetch }) {

  const getShikigamiData = async () => {
    const response = await fetch(`http://141.147.147.96:3000/shiki?mode=queryshiki&shiki_id=${params.slug}`);
    return await response.json();
  }

  const sdata = await getShikigamiData();

  const getBioData = async () => {
    const bdr = await fetch(`http://141.147.147.96:3000/bios?queryshiki=${sdata.式神名称}`);
    return await bdr.json();
  }

  let pick_rate = { all: "⏳", noban: "⏳", ban: "⏳", fogban: "⏳" };
  let kda = { all: "⏳", noban: "⏳", ban: "⏳", fogban: "⏳" };
  let avg_kills = { all: "⏳", noban: "⏳", ban: "⏳", fogban: "⏳" };
  let win_rate = { all: "⏳", noban: "⏳", ban: "⏳", fogban: "⏳" };

  const urls = [
    `http://141.147.147.96:3000/performance?shiki_id=${params.slug}&game_mode=all`,
    `http://141.147.147.96:3000/performance?shiki_id=${params.slug}&game_mode=noban`,
    `http://141.147.147.96:3000/performance?shiki_id=${params.slug}&game_mode=ban`,
    `http://141.147.147.96:3000/performance?shiki_id=${params.slug}&game_mode=fogban`
  ];

  const getIndividualPerformance = async () => {
    
    await Promise.all(urls.map(url =>
      fetch(url)
        .then(response => response.json())

    )).then(data => {

      kda = {
        all: data[0].kda,
        noban: data[1].kda,
        ban: data[2].kda,
        fogban: data[3].kda,
      }

      avg_kills = {
        all: data[0].avg_kill_cnt,
        noban: data[1].avg_kill_cnt,
        ban: data[2].avg_kill_cnt,
        fogban: data[3].avg_kill_cnt,
      }

      win_rate = {
        all: (data[0].win_rate * 100).toFixed(2),
        noban: (data[1].win_rate * 100).toFixed(2),
        ban: (data[2].win_rate * 100).toFixed(2),
        fogban: (data[3].win_rate * 100).toFixed(2),
      }

      pick_rate = {
        all: (data[0].battle_rate * 100).toFixed(2),
        noban: (data[1].battle_rate * 100).toFixed(2),
        ban: (data[2].battle_rate * 100).toFixed(2),
        fogban: (data[3].battle_rate * 100).toFixed(2),
      }

    }).catch(error => {

      console.log(error);
      console.error('[win-rates pick rates] could not complete fetch');

      pick_rate = { all: "reload", noban: "reload", ban: "reload", fogban: "reload" };
      kda = { all: "reload", noban: "reload", ban: "reload", fogban: "reload" };
      avg_kills = { all: "reload", noban: "reload", ban: "reload", fogban: "reload" };
      win_rate = { all: "reload", noban: "reload", ban: "reload", fogban: "reload" };

    });
  };
  
  const bd = await getBioData();

  await getIndividualPerformance();
  
  let bioData;
  try {
    bioData = {
      bio1: bd[0].fields.bio1,
      bio2: bd[0].fields.bio2,
      bio3: bd[0].fields.bio3,
      contributor: bd[0].fields.contributor
    };
  } catch (error) {
    console.log(error);
  }

  async function getOnmyodos() {
    const x = await fetch(`http://141.147.147.96:3000/onmyodos?shiki_id=${params.slug}`);
    return await x.json();
  }
  const onmyodos = await getOnmyodos();
    
  async function getSpells() {
    const x = await fetch(`http://141.147.147.96:3000/spells?shiki_id=${params.slug}`);
    return await x.json();
  }
  const spells = await getSpells();
    
  return {
    performance: {
      kda,
      avg_kills,
      win_rate,
      pick_rate
    },
    sdata,
    bioData,
    onmyodos,
    spells
  }

}