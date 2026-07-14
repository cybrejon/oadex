import { w as writable } from "./index.js";
let active_role = writable("all");
let isAscending = writable(true);
let role_config = writable([]);
let hasBeenLeft = writable(false);
let isLoading = writable(false);
let isTableMode = writable(false);
export {
  isAscending as a,
  active_role as b,
  isTableMode as c,
  hasBeenLeft as h,
  isLoading as i,
  role_config as r
};
