import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (input) => {
  return input.split(',').reduce((result, c) => 
      result + c.split('').reduce((curr, val) => ((curr + val.charCodeAt()) * 17) % 256, 0)
      , 0);
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      {
        input: 'HASH',
        expected: 52
      },
      {
        input: `rn=1`,
        expected: 30,
      },
      {
        input: `rn=1,cm-`,
        expected: 283,
      },
      {
        input: `rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7`,
        expected: 1320,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
