let bq = [1,2,3,4,5,6,3,2,2,5,6,7,8,9,4,235,2356,5];
console.log("this is the array: " + bq);

console.log("can js arrays index?: " + bq[3]);

let f = bq.filter(num => num > 5);
console.log("this if the filtered array: " + f);

const mapped_bq = new Map([bq]);
mapped_bq.set("numbers", bq);
console.log("mapped bq: " + mapped_bq.get("numbers"));

// let map2 = bq.map((el) => {
//   return {"num": el};
// })

// Shorter version of the Map
const map2 = bq.map(el => ({num: el}));
console.log(map2);


// REDUCER
const product = bq.reduce(
  (curResult, curValue) => curResult * curValue,
  1
)
console.log("ginormous product: " + product);

// MAX VALUE OF ALL STUFF THAT IS SWAG
let findMax = function(...an_array) {
  let largest_num = an_array[0];
  for (const num in an_array) {
    if (num > largest_num) {
      largest_num = num;
    }
  }
  return largest_num;
}

// console.log(bq);
console.log("\n findMax in Action:");
console.log(findMax(...bq));
