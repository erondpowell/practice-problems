const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

// function sendHTTPRequest(method, url, data) {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open(method, url);

//     xhr.responseType = "json";

//     xhr.onload = function () {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.response);
//       } else {
//         reject(new Error("Something Went Wrong!"));
//       }
//     };

//     xhr.onerror = function () {
//       reject(new Error("Failed to Send Request"));
//     };

//     xhr.send(JSON.stringify(data));
//   });
//   return promise;
// }

function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: data,
    // body: JSON.stringify(data),
    // headers: {
    //   "Content-Type": "application/json",
    // },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error("Something Went Wrong - Serverside");
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error("something Went Wrong");
    });
}

// function fetchPosts() {
//   sendHTTPRequest("GET", "https://jsonplaceholder.typicode.com/posts").then(
//     (responseData) => {
//       const listOfPosts = responseData;
//       // console.log(listOfPosts);
//       for (const post of listOfPosts) {
//         const postEl = document.importNode(postTemplate.content, true);
//         postEl.querySelector("h2").textContent = post.title.toUpperCase();
//         postEl.querySelector("p").textContent = post.body;
//         listElement.append(postEl);
//       }
//     }
//   );
// }

async function fetchPosts() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response);
    const listOfPosts = response.data;
    // console.log(listOfPosts);
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
    console.log(error.response);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  const fd = new FormData(form);
  // fd.append('title', title);
  // fd.append('body', content);
  fd.append("userId", userId);
  // fd.append('someFile', 'somephoto.png');

  const response = axios.post("https://jsonplaceholder.typicode.com/posts", fd);
  console.log(response);
}

// createPost("DUMMPY POST", "SOME COOL CONTENT");

fetchButton.addEventListener("click", fetchPosts);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    // console.log('clicked on btn');
    const postId = event.target.closest("li").id;
    // console.log(postId);
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});
