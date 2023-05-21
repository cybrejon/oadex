/** @type {import('./$types').LayoutServerLoad} */

export async function load({ fetch }) {

  const response = await fetch('http://150.230.58.91:3000/images');
  const images = await response.json();

  return {
    images
  }

}