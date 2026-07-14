import itemData from '$lib/data/items_transformed.js';
import images from '$lib/data/images.js';

export function load({ url }) {
  function getItemQuery() {
    return !!url.searchParams.get('i') && url.searchParams.get('i');
  }

  const itemQuery = getItemQuery();

  const resolved = itemData.map(item => ({
    ...item,
    image: images[item.image] || item.image
  }));

  return { itemData: resolved, itemQuery };
}
