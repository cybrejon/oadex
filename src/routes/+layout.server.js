/** @type {import('./$types').PageServerLoad} */

export async function load() {

  let shikiga_data;
  let images;

  await Promise.all([
    fetch('https://comp-sync.webapp.163.com/g78na_hero/free_convey?lang=en'),
    fetch('https://comp-sync.webapp.163.com/g78na_pics/api?lang=en')
  ])
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(data => {
    shikiga_data = data[0].data;
    images = data[1].path_dict;
  })
  .catch(console.error);


  return {
    shikiga_data,
    images
  }

}