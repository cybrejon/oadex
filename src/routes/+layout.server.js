/** @type {import('./$types').PageServerLoad} */

export async function load({ fetch }) {

  let shikiga_data;
  let images;

  await Promise.all([
    // please don't try anything funny with these 👇
    fetch('http://150.230.58.91:3000/shiki'),
    fetch('http://150.230.58.91:3000/images')
  ])
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(data => {
    const shiki_names = Object.keys(data[0]);
    function deleteKeys(keys) {
      shiki_names.forEach(shiki => {
        for (const key of keys) {
          delete data[0][shiki][key];
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
    ]);
    shikiga_data = data[0];
    images = data[1];
  })
  .catch(console.error);


  return {
    shikiga_data,
    images
  }

}