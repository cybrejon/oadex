/** @type {import('./$types').PageServerLoad} */

export async function load({ params, fetch }) {

  const response = await fetch(`http://150.230.58.91:3000/shiki?mode=queryshiki&shiki_id=${params.slug}`);
  const sdata = await response.json();

  return {
    sdata
  }

}