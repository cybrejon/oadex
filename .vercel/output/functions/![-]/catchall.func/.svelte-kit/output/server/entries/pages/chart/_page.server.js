import { P as PRIVATE_HOST_IP } from "../../../chunks/private.js";
async function load({ url }) {
  let mode = url.searchParams.get("mode");
  const getWrData = async (mode2) => {
    let wrdr = await fetch(`${PRIVATE_HOST_IP}/wr?mode=${mode2}`);
    return await wrdr.json();
  };
  let wrData;
  if (mode) {
    wrData = await getWrData(mode);
  } else {
    wrData = await getWrData("all");
    mode = "all";
  }
  return {
    wrData,
    mode
  };
}
export {
  load
};
