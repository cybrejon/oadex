import images from '$lib/data/images.js';
import searchIndex from '$lib/data/search_index.js';

export function load() {
  return { images, searchIndex };
}
