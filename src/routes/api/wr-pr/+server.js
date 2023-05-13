/** @type {import('./$types').RequestHandler} */

export async function GET({ url }) {

  const shiki_id = url.searchParams.get('shiki_id');
  const game_mode = url.searchParams.get('game_mode');

  async function fetchWrData(link, id) {
    const response = await fetch(link);
    const data = await response.json();
    return data.data.filter((shiki) => shiki.hero_id === id)[0];
  }

  let endpoint;  
  switch (game_mode) {
    case "all":
      endpoint = 'https://comp-sync.webapp.163.com/g78_op_stat_hero_rank_new_v2/free_convey?hero_type=&limit=200';
      break;
    case "noban":
      endpoint = 'https://comp-sync.webapp.163.com/g78_op_stat_hero_rank_new_v2/free_convey?hero_type=&limit=200&mode=noban';
      break;
    case "ban":
      endpoint = 'https://comp-sync.webapp.163.com/g78_op_stat_hero_rank_new_v2/free_convey?hero_type=&limit=200&mode=ban_3';
      break;
    case "fogban":
      endpoint = 'https://comp-sync.webapp.163.com/g78_op_stat_hero_rank_new_v2/free_convey?hero_type=&limit=200&mode=ban_4';
      break;
  
    default:
      break;
  }

  const data = await fetchWrData(endpoint, shiki_id);

  return new Response(data ? JSON.stringify(data) : JSON.stringify({
    win_rate: 0.000,
    battle_rate: 0.000
  }));
  
}