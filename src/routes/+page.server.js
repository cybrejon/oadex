/** @type {import('./$types').PageServerLoad} */

export async function load({ fetch }) {

  const response = await fetch('http://150.230.58.91:3000/shiki?mode=query&query=式神定位&query=式神ID&query=式神方头像&query=新式神');
  const shikiga_data = await response.json();

  return {
    shikiga_data
  }

}