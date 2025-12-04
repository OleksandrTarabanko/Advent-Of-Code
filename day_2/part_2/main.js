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
  for (let i = 1; i <= id.length / 2; i++) {
    if (id.length % i === 0) {
      // check where sequence can be splitted into equal small sequences
      const smallSequence = id.substring(0, i);
      // create the correct sequence
      // console.log(smallSequence);
      const fullSequence = smallSequence.repeat(id.length / i);

      if (fullSequence === id) {
        return true;
      }
    }
  }
  return false;
}

// console.log(invalidCheck("565656"));
// // 56 55 65
// console.log(invalidCheck("824824824"));
// // 824 824 824
// console.log(invalidCheck("2121212121"));
// // 21 21 21 21 21
// console.log(invalidCheck("11122111221112211122"));
// // 11122 11122 11122 11122
// console.log(invalidCheck("11111111111"));
// console.log(invalidCheck("5555555"));

for (const idRange of idArr) {
  const startValue = parseInt(idRange[0]);
  const endValue = parseInt(idRange[1]);

  for (let i = startValue; i <= endValue; i++) {
    const id = i.toString();

    if (invalidCheck(id)) {
      //   console.log(id);
      invalidIdSum += parseInt(id);
    }
  }
}

console.log(invalidIdSum);

// ? input
// 4174379265 inputExample
