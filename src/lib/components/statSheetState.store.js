import { writable } from 'svelte/store';

export let currentRole = writable('ALL');
export let currentStatValues = writable('base');
export let currentLevelSliderValue = writable(0);
export let visibleColumns = writable({
  role: false,
  patk: true,
  atkspd: true,
  hp: true,
  hpregen: false,
  mp: true,
  mpregen: false,
  parmor: true,
  marmor: true,
  mspeed: true
})