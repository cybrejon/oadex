/** @type {import('./$types').PageLoad} */

import { data } from '$lib/json/data.json';
import { path_dict } from '$lib/json/images.json';
import { scores, roles, roles_numeral, lanes } from '$lib/json/dictionary.json';

export async function load() {

  return {
    data,
    path_dict,
    dictionary: {
      scores,
      roles,
      roles_numeral,
      lanes
    }
  }

}