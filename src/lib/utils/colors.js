import { colors } from '$lib/json/dictionary.json';

export let colorCodeRemove = (string) => {
  const color_regex = new RegExp(colors.join("|"), "gi");
  return string.replace(color_regex, "");
}