import { writable } from "svelte/store";

// route /
// import { data } from '$lib/json/data.json';
// export let shikiga_data = writable(data);

// import { path_dict } from '$lib/json/images.json';
// export let images = writable(path_dict);

export let active_role = writable('all');
export let isAscending = writable(true);
export let role_config = writable([]);
export let hasBeenLeft = writable(false);
export let isLoading = writable(false);
export let isTableMode = writable(false);