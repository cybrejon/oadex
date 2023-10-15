const syntax = {
  "#n": "</span>",
  "#r": "</span><br><div style=\"height: 10px;\"></div>",
  "#O": "<span style=\"color: #FFA957;\">",
  "#c9e45fa": "<span style=\"color: #c9e45f;\"> ",
  "#cffba35": "<span style=\"color: #CFFBA3;\"> ",
  "#c0095cc": "<span style=\"color: #E72C81;\"> ",
  "#c39b54a": "<span style=\"color: #c39b54;\"> ",
  "#cb82a2f": "<span style=\"color: #cb82a2;\"> ",
  "#c35c6e7": "<span style=\"color: #c35c6e;\"> ",
  "#ce7ad2f": "<span style=\"color: #ce7ad2;\"> ",
  "#ca61fe4": "<span style=\"color: #ca61fe;\"> ",
  "#c0c0c0": "<span style=\"color: #c0c0c0;\"> ",
  "#R": "<span style=\"color: #E75955;\"> ",
  "#W": "<span style=\"color: #ffffff;\"> ",
  "#K": "<span style=\"color: #000000;\"> ",
  "#P": "<span style=\"color: #FF9E9E;\"> ",
  "#G": "<span style=\"color: #71FF57;\"> ",
  "#B": "<span style=\"color: #5765FF;\"> ",
  "#Y": "<span style=\"color: #57CFFF;\"> ",
  "#D": "<span style=\"color: #FFF757;\"> ",
  "#U": "<span style=\"color: #7E41D4;\"> "
}

const code = Object.keys(syntax);
const codeRegex = new RegExp(code.join("|"), "gi");

export function highlight(text) {
  return text.replace(codeRegex, (match) => syntax[match])
};