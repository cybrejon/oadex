/** @type {import('./$types').PageServerLoad} */

export async function load({ fetch }) {

  let shikiga_data;
  let images;

  await Promise.all([
    fetch('https://comp-sync.webapp.163.com/g78na_hero/free_convey?lang=en'),
    fetch('https://comp-sync.webapp.163.com/g78na_pics/api?lang=en')
  ])
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(data => {
    const shiki_names = Object.keys(data[0].data);
    function deleteKeys(keys) {
      shiki_names.forEach(shiki => {
        for (const key of keys) {
          delete data[0].data[shiki][key];
        }
      })
      
    }
    deleteKeys([
      "式神新卡片",
      "式神传记",
      "皮肤",
      "式神圆头像",
      "是否长期限免",
      "式神卡片"
    ])
    shikiga_data = data[0].data;
    images = data[1].path_dict;
  })
  .catch(console.error);


  return {
    shikiga_data,
    images
  }

}