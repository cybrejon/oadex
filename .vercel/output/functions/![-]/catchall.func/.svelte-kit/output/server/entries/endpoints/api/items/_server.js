async function GET({ url }) {
  url.searchParams.get("item_id");
  url.searchParams.get("item_type");
  url.searchParams.get("item_tier");
  let itemData = [];
  async function getItemData() {
    const response = await fetch("https://comp-sync.webapp.163.com/g78na_equip/free_convey?lang=en");
    const data = await response.json();
    const itemNames = Object.keys(data.data);
    itemNames.forEach((name) => {
      itemData.push({
        id: data.data[name].装备ID,
        name,
        image: data.data[name].图标路径,
        special_description: data.data[name].装备额外描述 == null ? void 0 : data.data[name].装备额外描述,
        type: data.data[name].装备类型,
        composition: data.data[name].子物品,
        skills: {
          passive: data.data[name].装备被动技能 == null ? void 0 : data.data[name].装备被动技能,
          active: data.data[name].装备主动技能 == null ? void 0 : data.data[name].装备主动技能
        },
        attributes: data.data[name].装备属性,
        tier: data.data[name].装备等级,
        price: data.data[name].装备价格
      });
    });
  }
  await getItemData();
  return new Response(JSON.stringify(itemData, null, 2));
}
export {
  GET
};
