const button = document.querySelector("button");
const output = document.querySelector("p");

// HOW TO MAKE A PROMISE
// Promises take one function as an argument, the function can have two parameters:
// resolve:
// reject:
const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

// .THEN() -- .CATCH() SYNTAX
// Then/catch lets us escape callback hell by defining the next step in execution
// at the current block scope, instead of nesting each subsequent callback function.
// async function trackUserHandler() {
//   let positionData;
//     .then((posData) => {
//       positionData = posData;
//       return setTimer(2000);
//     })
//     .catch( (err) => {
//       console.log(err);
//       return "On we go....";
//     })
//     .then((data) => {
//       console.log(data, positionData);
//     });

//   setTimer(1000).then(() => {
//     console.log("done");
//   });
//   console.log("getting position");
//     setTimer(1000).then(() => {
//     console.log("done");
//   });
//   console.log("getting position");
// }

// ASYNC -- AWAIT
// ASYNC wraps the entire function it is used with into a Promise
// async function trackUserHandler() {
//   const posData = await getPosition();
//   const timerData = await setTimer(2000);
//   console.log(timerData, posData);
// }

// ASYNC -- AWAIT with ERROR HANDLING
async function trackUserHandler() {
  console.log("breans"); //Executes immediately.
  let posData;
  let timerData;
  try {
    //await funcs execute asynchronously
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  console.log("breans 2.0"); //executes after try/catch and above console.log()
}

// ASYNC AWAIT TIPS:
// Tip 1: Functions nested into Async functions and below the try/catch block
// do not execute until the try/catch block resolves.
// This means if you want to kick off multiple events simultaneously,
// you will need to build a wrapper function and nest in the async func
// and whatever events you want to start at the same time.

// PROMISE METHODS .race()  .all()
// .race([]) takes an array of promises and returns the first to execute.
Promise.race([getPosition(), setTimer(2000)]).then((data) => {
  console.log(data);
  console.log("breans 3.0");
});

// They all resolve or at least on rejected
Promise.all([getPosition(), setTimer(2000)]).then((data) => {
  console.log(data);
  console.log("breans 4.0");
});

Promise.allSettled([getPosition(), setTimer(2000)]).then((data) => {
  console.log(data);
});

button.addEventListener("click", trackUserHandler);
// let result = 0;
// for (let i = 0; i < 10000000; i++) {
//   result += i;
// }

// console.log(result);
