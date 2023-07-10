/** @type {import('./$types').LayoutServerLoad} */

export async function load({ fetch }) {

  const response = await fetch('http://141.147.147.96:3000/images');
  const images = await response.json();

  return {
    images
  }

}