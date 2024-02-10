import { writable } from "svelte/store";

export let tableSorting = writable({
  lastSorted: '',
  lastProp: '',
  sorting: {
    patk: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    },
    hp: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    },
    hpregen: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    },
    mp: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    },
    mpregen: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    },
    parmor: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    },
    marmor: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    },
    movement: {
      base: {
        isHigh: false
      },
      growth: {
        isHigh: false
      }
    }
  }
});