
/** @type {import('./$types').RequestHandler} */

const fs = require('fs');

export async function GET() {

  const response = await fetch('https://api.sheety.co/30c5f72f83cf5f70e05f499abb622027/smcrc/masterList');
  const shiki_data = await response.json();

  fs.writeFileSync('src/data/shiki.json', JSON.stringify(shiki_data));

  return new Response (JSON.stringify(shiki_data));
}