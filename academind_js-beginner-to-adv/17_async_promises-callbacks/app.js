const button = document.querySelector("button");
const paragraph = document.querySelector("p");

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject), () => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};


function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      setTimer(2000).then(data => {
        console.log(data, posData)
      });
    },
    (error) => {
      console.log(error);
    }
  );
  setTimeout(() => {
    console.log("Time Done!");
  });
}

button.addEventListener("click", trackUserHandler);

let result = 0;
for (let i = 0; i < 10000000; i++) {
  result += i;
}

console.log(result);
