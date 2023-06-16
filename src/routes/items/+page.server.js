/** @type {import('./$types').PageServerLoad} */

export async function load({ fetch, url }) {

  function getItemQuery() {
    return !!url.searchParams.get('i') && url.searchParams.get('i');
  }

  const itemQuery = getItemQuery();

  const itemData_r = await fetch('http://150.230.58.91:3000/items');
  const itemData = await itemData_r.json();

  const itemNames = itemData.map((item, i) => itemData[i].name);

  return {
    itemNames,
    itemData,
    itemQuery
  }

}