import "dotenv/config";
import { P as PRIVATE_HOST_IP } from "../../chunks/private.js";
async function load({ fetch, url }) {
  async function getShikigamiListData() {
    let response;
    const tableQueries = [
      "式神名称",
      "式神定位",
      "式神方头像",
      "式神基础属性",
      "式神属性成长",
      "式神ID",
      "新式神"
    ];
    const query = tableQueries.map((query2) => `&query=${query2}`);
    response = await fetch(`${PRIVATE_HOST_IP}/shiki?mode=query${query.join("")}`);
    return await response.json();
  }
  async function getDamageTypes() {
    const d = await fetch(`${PRIVATE_HOST_IP}/damagetype`);
    return d.json();
  }
  const shikiga_data = await getShikigamiListData();
  const damage_types = await getDamageTypes();
  return {
    shikiga_data,
    damage_types
  };
}
export {
  load
};
