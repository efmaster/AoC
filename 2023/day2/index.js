import { count } from 'console';
import fs from 'fs'

const lines = fs.readFileSync('input.txt', 'utf8').trim().split('\r\n')

const maxQube = {
    red: 12,
    green: 13,
    blue: 14
};6

let part1 = lines
    .filter((line) => checkGame(line.split(':')[1].trim()))
    .map((line) => line.match(/\d+/gm)[0])
    .reduce((prev, curr) => +prev + +curr);


let part2 = lines
    .map((line) => getMaxPerColor(line.split(':')[1].trim()))
    .reduce((prev, curr) => prev + curr);


console.log("Part 1 : " +part1);
console.log("Part 2 : " +part2);


function checkGame(input) {
    var result = true
    input.split(';').forEach((element) => {
        var isvalid = validateSets(element.trim())        
        if (isvalid == false) 
            result = false;         
    });
    return result;
}

function validateSets(input) {
    const regexpNames = /(\d+) (\w+)/gm;
    for (const match of input.matchAll(regexpNames))
        if (maxQube[match[2]] < match[1])
            return false;
    return true
}

function getMaxPerColor(input) {
    var maxColor = {
        red: 0,
        green: 0,
        blue: 0
    }; 
    const regexpNames = /(\d+) (\w+)/gm;
    for (const match of input.matchAll(regexpNames))
        if (maxColor[match[2]] < +match[1])
            maxColor[match[2]] = +match[1];            

    return maxColor['red'] * maxColor['green'] * maxColor['blue']

}