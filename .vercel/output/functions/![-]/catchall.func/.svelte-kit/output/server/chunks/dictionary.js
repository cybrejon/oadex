const scores = {
  "1": "D",
  "2": "C",
  "3": "B",
  "4": "A",
  "5": "S"
};
const roles = {
  "射": "MARKSMAN",
  "忍": "NINJA",
  "守": "TANK",
  "侍": "SAMURAI",
  "巫": "MAGE",
  "祝": "SUPPORT"
};
const roles_reversed = {
  MARKSMAN: "射",
  NINJA: "忍",
  TANK: "守",
  SAMURAI: "侍",
  MAGE: "巫",
  SUPPORT: "祝"
};
const roles_numeral = {
  "1": "SAMURAI",
  "2": "MAGE",
  "3": "MARKSMAN",
  "4": "NINJA",
  "5": "TANK",
  "6": "SUPPORT"
};
const lanes = {
  "中": "Mid Laner",
  "辅": "Bottom Laner Support",
  "上": "Top Laner",
  "野": "Jungler/Gank",
  "下": "Bottom Laner Marksman"
};
const difficulty = {
  "1": "Very Easy",
  "2": "Easy",
  "3": "Normal",
  "4": "Hard",
  "5": "Extreme"
};
export {
  roles_reversed as a,
  roles_numeral as b,
  difficulty as d,
  lanes as l,
  roles as r,
  scores as s
};
