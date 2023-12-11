import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  let result = input.split("\n").map((line) => {
    let first = line.split("").find((v) => !Number.isNaN(Number(v)));
    let last = line.split("").findLast((v) => !Number.isNaN(Number(v)));
    return Number(first + last);
  });

  return result.reduce((s, v) => s + v)
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  let result = input.split("\n").map((line) => {
    const mapObj = {
      one: "1",
      two: "2",
      three: "3",
      four: "4",
      five: "5",
      six: "6",
      seven: "7",
      eight: "8",
      nine: "9",
    };

    let repline = replaceAll(line, mapObj);
    let first = repline.split("").find((v) => !Number.isNaN(Number(v)));
    let last = repline.split("").findLast((v) => !Number.isNaN(Number(v)));
    return Number(first + last);
  });

  return result.reduce((s, v) => s + v);
};

function replaceAll(str, mapObj) {
  var re = new RegExp(Object.keys(mapObj).join("|"), "gi");

  return str.replace(re, function (matched) {
    return mapObj[matched.toLowerCase()];
  });
}

run({
  part1: {
    tests: [
      {
        input: `jnsk5aaa`,
        expected: 55,
      },
      {
        input: `1sdgjnsk5`,
        expected: 15,
      },
      {
        input: `sdg4j4441nsk`,
        expected: 41,
      },
      {
        input: `
        sd5g5j41nsk9
        1sdgjnsk5
        `,
        expected: 74,
      },
      {
        input: `
        1abc2
        pqr3stu8vwx
        a1b2c3d4e5f
        treb7uchet
        `,
        expected: 142,
      }
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: 'onethree',
        expected: 13,
      },
      {
        input: `
        two1nine
        eightwothree
        abcone2threexyz
        xtwone3four
        4nineeightseven2
        zoneight234
        7pqrstsixteen
        `,
        expected: 281,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
