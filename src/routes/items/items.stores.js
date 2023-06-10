import { writable } from "svelte/store";

export let currentTier = writable("All");
export let currentType = writable("All");

export let itemData_store = writable([]);

export let toggleStates = writable({
  tier: "All",
  type: "All"
});