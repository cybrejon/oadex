import 'dotenv/config';

export async function load({ fetch, url }) {

  const shikiClassQuery = url.searchParams.get('shikiclass');
  console.log(shikiClassQuery);
  const response = await fetch('http://141.147.147.96:3000/shiki?mode=query&query=式神定位&query=式神ID&query=式神方头像&query=新式神');
  const shikiga_data = await response.json();

  return {
    shikiga_data,
    shikiClassQuery
  }

}