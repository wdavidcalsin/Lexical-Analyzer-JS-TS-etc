import { Group, Rule } from "@jlguenego/lexer";

// const str = `
// var x = 3;
// var y = 52;
// `;

export const blank = new Rule({
  name: "blank",
  pattern: /\s+/,
  ignore: true,
});

export const keywords = Rule.createKeywords(["var"]);

export const operators = Rule.createGroup(Group.OPERATORS, [
  {
    name: "equal",
    pattern: "=",
  },
]);

export const separators = Rule.createGroup(Group.SEPARATORS, [
  {
    name: "semi-column",
    pattern: ";",
  },
]);

export const identifier = new Rule({
  name: "identifier",
  pattern: /\w+/,
  group: Group.IDENTIFIERS,
});
