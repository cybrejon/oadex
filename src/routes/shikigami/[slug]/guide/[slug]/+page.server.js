import { PRIVATE_HOST_IP } from '$env/static/private';

export async function load({ params, url, fetch }) {
  const shikigami_name = url.searchParams.get('shikigami_name');
  const raw_guide_data = await fetch(`${PRIVATE_HOST_IP}/cms/api/guide?shiki_id=${shikigami_name}&filename=${params.slug}`);
  const guide_data = await raw_guide_data.json();

  return {
    guide_data
  }
}