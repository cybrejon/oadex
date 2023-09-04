import { PRIVATE_HOST_IP } from '$env/static/private';

export async function load({ fetch }) {

  //* make images available everywhere
  const response = await fetch(`${PRIVATE_HOST_IP}/images`);
  const images = await response.json();

  const sir = await fetch(`${PRIVATE_HOST_IP}/search`);
  const searchIndex = await sir.json();

  return {
    images,
    searchIndex
  }

}