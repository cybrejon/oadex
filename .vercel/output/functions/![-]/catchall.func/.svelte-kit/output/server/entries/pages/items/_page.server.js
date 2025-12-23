import { P as PRIVATE_HOST_IP } from "../../../chunks/private.js";
async function load({ fetch, url }) {
  function getItemQuery() {
    return !!url.searchParams.get("i") && url.searchParams.get("i");
  }
  const itemQuery = getItemQuery();
  const itemData_r = await fetch(`${PRIVATE_HOST_IP}/items`);
  const itemData = await itemData_r.json();
  return {
    itemData,
    itemQuery
  };
}
export {
  load
};
