/** @type {import('./$types').PageServerLoad} */

export async function load({ fetch, url }) {

  function getItemQuery() {
    return !!url.searchParams.get('i') && url.searchParams.get('i');
  }

  const itemQuery = getItemQuery();

  const itemData_r = await fetch('http://141.147.147.96:3000/items');
  const itemData = await itemData_r.json();

  return {
    itemData,
    itemQuery
  }

}