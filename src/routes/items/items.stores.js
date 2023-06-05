import { writable } from "svelte/store";

export let currentTier = writable("All");
export let currentType = writable("All");