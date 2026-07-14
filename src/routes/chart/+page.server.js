import wrAll from '$lib/data/wr/all.js';
import wrBan from '$lib/data/wr/ban.js';
import wrNoban from '$lib/data/wr/noban.js';
import wrFogban from '$lib/data/wr/fogban.js';
import shikiIndex from '$lib/data/shikigami/_index.js';

const heroMap = {};
for (const [name, entry] of Object.entries(shikiIndex)) {
  heroMap[String(entry['式神ID'])] = {
    name,
    class: entry['式神定位'],
    image: entry['式神方头像']
  };
}

function transformWr(data) {
  return data.map(item => {
    const shiki = heroMap[String(item.hero_id)] || {};
    return {
      name: shiki.name || item.hero_id,
      id: item.hero_id,
      image: shiki.image,
      wr: (item.win_rate * 100).toFixed(2),
      pickRate: (item.battle_rate * 100).toFixed(2),
      kda: item.kda,
      kills: item.avg_kill_cnt,
      shikiClass: shiki.class || [],
      number: 0
    };
  }).sort((a, b) => b.wr - a.wr).map((item, i) => ({ ...item, number: i + 1 }));
}

export function load({ url }) {
  let mode = url.searchParams.get('mode') || 'all';
  let wrData;
  switch (mode) {
    case 'all': wrData = transformWr(wrAll); break;
    case 'noban': wrData = transformWr(wrNoban); break;
    case 'ban': wrData = transformWr(wrBan); break;
    case 'fogban': wrData = transformWr(wrFogban); break;
    default: wrData = transformWr(wrAll); mode = 'all';
  }
  return { wrData, mode };
}
