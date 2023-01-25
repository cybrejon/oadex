
/** @type {import('./$types').RequestHandler} */

export async function GET({ url }) {

  const response = await fetch('https://comp-sync.webapp.163.com/g78na_hero/free_convey?lang=en');
  const shiki_data = await response.json();

  return new Response (JSON.stringify(shiki_data));
}