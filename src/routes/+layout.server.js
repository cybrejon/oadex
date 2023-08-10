/** @type {import('./$types').LayoutServerLoad} */

export async function load({ fetch }) {

  //* make images available everywhere
  const response = await fetch('http://141.147.147.96:3000/images');
  const images = await response.json();

  const sir = await fetch('http://141.147.147.96:3000/search');
  const searchIndex = await sir.json();

  return {
    images,
    searchIndex
  }

}