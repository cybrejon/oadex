/** @type {import('./$types').PageLoad} */

import { scores, roles, roles_numeral, lanes, difficulty } from '$lib/json/dictionary.json';

export async function load({ data }) {

  const shikiga_data = data.sdata;
  const bioData = data.bioData;
  const wrData = data.wrData;
  const performance = data.performance;

  return {
    performance,
    wrData,
    bioData,
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