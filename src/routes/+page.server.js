import shikiIndex from '$lib/data/shikigami/_index.js';
import damage_types from '$lib/data/damage_types.js';

export function load() {
  return {
    shikiga_data: shikiIndex,
    damage_types
  };
}
