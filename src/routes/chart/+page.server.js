import { PRIVATE_HOST_IP } from '$env/static/private';

export async function load({ url }) {

  let mode = url.searchParams.get('mode');
  
  const getWrData = async (mode) => {
    let wrdr = await fetch(`${PRIVATE_HOST_IP}/wr?mode=${mode}`);    
    return await wrdr.json();
  }

  let wrData;

  if (mode) {
    wrData = await getWrData(mode);
  } else {
    wrData = await getWrData('all');
    mode = 'all';
  }

  return {
    wrData,
    mode
  }
  
}
