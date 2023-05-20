import { colors } from '$lib/json/dictionary.json';

export function colorCodeRemove() {
  const color_regex = new RegExp(colors.join("|"), "gi");
  return this.replace(color_regex, "");
}