import fs from 'fs'

function replaceAll(str,mapObj){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return str.replace(re, function(matched){
        return mapObj[matched.toLowerCase()];
    });
}

const lines = fs.readFileSync('input.txt', 'utf8').trim().split('\r\n')

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

let part1 = lines
    .map((line) => {
        let first = line.split('').find((v) => !Number.isNaN(Number(v)))
        let last = line.split('').findLast((v) => !Number.isNaN(Number(v)))
        return Number(first + last)
});

let part2 = lines.map((line) => {
    let repline = replaceAll(line, mapObj);
    let first = repline.split('').find((v) => !Number.isNaN(Number(v)))
    let last = repline.split('').findLast((v) => !Number.isNaN(Number(v)))
    return Number(first + last)
});

console.log("Part 1: ", part1.reduce((s, v) => s + v))
console.log("Part 2: ", part2.reduce((s, v) => s + v))