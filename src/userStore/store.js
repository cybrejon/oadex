import { writable } from "svelte/store";

export let active_role = writable('all');
export let isAscending = writable(true);
export let role_config = writable([]);
export let hasBeenLeft = writable(false);
export let isLoading = writable(false);
export let isTableMode = writable(false);