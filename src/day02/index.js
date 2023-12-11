import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const maxQube = {
  red: 12,
  green: 13,
  blue: 14,
};

const part1 = (rawInput) => {
  const input = parseInput(rawInput).split("\n");
  return +input
  .filter((line) => checkGame(line.split(":")[1].trim()))
  .map((line) => line.match(/\d+/gm)[0])
  .reduce((prev, curr) => +prev + +curr);
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput).split("\n");
  return input.map((line) => getMaxPerColor(line.split(":")[1].trim()))
  .reduce((prev, curr) => prev + curr);
};

function checkGame(input) {
  var result = true;
  input.split(";").forEach((element) => {
    var isvalid = validateSets(element.trim());
    if (isvalid == false) result = false;
  });
  return result;
}

function validateSets(input) {
  const regexpNames = /(\d+) (\w+)/gm;
  for (const match of input.matchAll(regexpNames))
    if (maxQube[match[2]] < match[1]) return false;
  return true;
}

function getMaxPerColor(input) {
  var maxColor = {
    red: 0,
    green: 0,
    blue: 0,
  };
  const regexpNames = /(\d+) (\w+)/gm;
  for (const match of input.matchAll(regexpNames))
    if (maxColor[match[2]] < +match[1]) maxColor[match[2]] = +match[1];

  return maxColor["red"] * maxColor["green"] * maxColor["blue"];
}

run({
  part1: {
    tests: [
      {
        input: `Game 1: 1 blue, 1 red, 1 green; 2 blue, 2 green, 2 red`,
        expected: 1,
      },
      {
        input: `
          Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
          Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
          Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
          Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
          Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
        `,
        expected: 8
      }
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
          Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
          Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
          Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
          Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
          Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
        `,
        expected: 2286,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});