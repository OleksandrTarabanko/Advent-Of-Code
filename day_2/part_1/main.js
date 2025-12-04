import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf8").trim();

const inputExample =
  "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124";
let invalidIdSum = 0;
const idArr = [];

input.split(",").forEach((element) => {
  idArr.push(element.split("-"));
});

function invalidCheck(id) {
  return id.substring(0, id.length / 2) === id.substring(id.length / 2);

  // const digitsArr = id.split("");

  // const sequenceFirstPart = [];
  // const sequenceSecondPart = [];

  // // EVEN
  // if (digitsArr.length % 2 === 0) {
  //   for (let i = 0; i < digitsArr.length; i++) {
  //     const digit = digitsArr[i];

  //     if (i < digitsArr.length / 2) {
  //       sequenceFirstPart.push(digit);
  //     }

  //     if (i >= digitsArr.length / 2) {
  //       sequenceSecondPart.push(digit);
  //     }
  //   }

  //   return sequenceFirstPart.toString() === sequenceSecondPart.toString();
  // }

  // // ODD
  // if (digitsArr.length % 2 === 1) {
  //   return false;
  // }
}

// console.log(invalidCheck("1009"));
// console.log(invalidCheck("1010"));
// console.log(invalidCheck("38593859"));
// console.log(invalidCheck("123"));

for (const idRange of idArr) {
  const startValue = parseInt(idRange[0]);
  const endValue = parseInt(idRange[1]);

  for (let i = startValue; i <= endValue; i++) {
    const id = i.toString();

    if (invalidCheck(id)) {
      invalidIdSum += parseInt(id);
    }
  }
}

console.log(invalidIdSum);
// 8576933996 input
// 1227775554 inputExample
