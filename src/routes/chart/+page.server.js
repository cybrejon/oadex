/** @type {import('./$types').PageServerLoad} */

export async function load({ url }) {

  console.log(url.searchParams.get('mode'));

  let mode = url.searchParams.get('mode');
  
  const getWrData = async (mode) => {
    let wrdr = await fetch(`http://150.230.58.91:3000/wr?mode=${mode}`);    
    return await wrdr.json();
  }

  let wrData;

  if (mode) {
    wrData = await getWrData(mode);
  } else {
    wrData = await getWrData('all');
    mode = 'all';
  }

  return {
    wrData,
    mode
  }
  
}
