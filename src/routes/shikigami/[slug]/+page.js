/** @type {import('./$types').PageLoad} */

import { scores, roles, roles_numeral, lanes, difficulty } from '$lib/json/dictionary.json';

export async function load() {

  return {
    dictionary: {
      scores,
      roles,
      roles_numeral,
      lanes,
      difficulty
    }
  }

}