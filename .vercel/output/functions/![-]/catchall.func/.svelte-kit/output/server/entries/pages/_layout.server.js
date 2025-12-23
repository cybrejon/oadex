import { P as PRIVATE_HOST_IP } from "../../chunks/private.js";
async function load({ fetch }) {
  const response = await fetch(`${PRIVATE_HOST_IP}/images`);
  const images = await response.json();
  const sir = await fetch(`${PRIVATE_HOST_IP}/search`);
  const searchIndex = await sir.json();
  return {
    images,
    searchIndex
  };
}
export {
  load
};
