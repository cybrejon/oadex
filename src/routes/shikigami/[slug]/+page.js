/** @type {import('./$types').PageLoad} */

import { scores, roles, roles_numeral, lanes, difficulty } from '$lib/json/dictionary.json';

export async function load({ data }) {

  const shikiga_data = data.sdata;
  const bioData = data.bioData;
  const performance = data.performance;
  const onmyodos = data.onmyodos;

  const wrData = data.wrData;
  const wrData_ban = data.wrData_ban;
  const wrData_noban = data.wrData_noban;
  const wrData_fogban = data.wrData_fogban;

  return {
    onmyodos,
    performance,
    wrData,
    wrData_ban,
    wrData_noban,
    wrData_fogban,
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