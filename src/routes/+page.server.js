import 'dotenv/config';
import { PRIVATE_HOST_IP } from '$env/static/private';

export async function load({ fetch, url }) {

  const shikiClassQuery = url.searchParams.get('shikiclass');
  console.log(shikiClassQuery);
  const response = await fetch(`${PRIVATE_HOST_IP}/shiki?mode=query&query=式神定位&query=式神ID&query=式神方头像&query=新式神`);
  const shikiga_data = await response.json();

  return {
    shikiga_data,
    shikiClassQuery
  }

}