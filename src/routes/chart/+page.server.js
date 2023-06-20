/** @type {import('./$types').PageServerLoad} */

export async function load({ url }) {

  console.log(url.searchParams.get('mode'));

  const mode = url.searchParams.get('mode');
  
  const getWrData = async (mode) => {
    let wrdr = await fetch(`http://150.230.58.91:3000/wr?mode=${mode}`);    
    return await wrdr.json();
  }

  const wrData = await getWrData(mode);

  return {
    wrData,
    mode
  }
  
}
