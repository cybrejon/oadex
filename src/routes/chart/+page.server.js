/** @type {import('./$types').PageServerLoad} */

export async function load() {
  
  const getWrData = async (mode) => {
    let wrdr = await fetch(`http://150.230.58.91:3000/wr?mode=${mode}`);    
    return await wrdr.json();
  }

  const wrData = await getWrData('all');
  const wrData_noban = await getWrData('noban');
  const wrData_ban = await getWrData('ban');
  const wrData_fogban = await getWrData('fogban');

  return {
    wrData,
    wrData_noban,
    wrData_ban,
    wrData_fogban
  }
  
}
