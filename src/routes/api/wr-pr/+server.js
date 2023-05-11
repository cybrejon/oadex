/** @type {import('./$types').RequestHandler} */

export async function GET({ url }) {

  const shiki_id = url.searchParams.get('shiki_id');

  async function fetchWrData(link, id) {
    const response = await fetch(link);
    const data = await response.json();
    return data.data.filter((shiki) => shiki.hero_id === id)[0];
  }

  const data = await fetchWrData("https://comp-sync.webapp.163.com/g78_op_stat_hero_rank_new_v2/free_convey?hero_type=&limit=200", shiki_id);

  return new Response(JSON.stringify(data));
  
}
