import { writable } from "svelte/store";

export let tableSorting = writable({
  lastSorted: '',
  lastProp: '',
  sorting: {
    patk: {
      isHigh: false
    },
    hp: {
      isHigh: false
    },
    hpregen: {
      isHigh: false
    },
    mp: {
      isHigh: false
    },
    mpregen: {
      isHigh: false
    },
    parmor: {
      isHigh: false
    },
    marmor: {
      isHigh: false
    },
    movement: {
      isHigh: false
    }
  }
});