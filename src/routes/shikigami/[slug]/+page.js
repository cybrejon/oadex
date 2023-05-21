/** @type {import('./$types').PageLoad} */

import { scores, roles, roles_numeral, lanes, difficulty } from '$lib/json/dictionary.json';

export async function load({ fetch, params }) {

  console.log(params.slug);

  const response = await fetch(`http://150.230.58.91:3000/shiki?mode=queryshiki&shiki_id=${params.slug}`);
  const shikiga_data = await response.json();

  return {
    shikiga_data,
    dictionary: {
      scores,
      roles,
      roles_numeral,
      lanes,
      difficulty
    }
  }

}