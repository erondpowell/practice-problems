const button = document.querySelector('button');
// const d = document.getElementById('main-content');
// const html = document.createElement('p')
const div = document.querySelector('div');

const buttonClickHandler = (event) => {
  // console.log(event);
  // console.log('button click handler 1' + (v.length>0 ? v : '.'));
  // event.target.disabled = true;
  // alert('some alert');
  // console.log(html);
  // let newClone = html.cloneNode([true]);
  // newClone.innerText = "You hovered over me";
  // d.appendChild(newClone);
  console.log("CLICKED BUTTON");
  console.log(event);
};

const divClickHandler = (event) => {
  console.log("CLICKED DIV");
  console.log(event);
};

// const anotherButtonClickHandler = () => {
//   console.log('beans');
// }


// const boundFn = buttonClickHandler.bind(this, 'wacky');

// button.addEventListener('click', boundFn);

// setTimeout(()=> {
//   button.removeEventListener("click", boundFn);
// }, 2000);

// buttons.forEach((button) => {
//   button.addEventListener("click", buttonClickHandler);
// })


// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   console.log(event);
// })

// const form = document.querySelector("form");
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   console.log(event.target.value);
// });

button.addEventListener('click', (event)=>{
  buttonClickHandler(event);
});

div.addEventListener('click', (event) => {
  divClickHandler(event);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach((listItem) => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');

//   });
// })

list.addEventListener('click', event => {
  event.target.classList.toggle("highlight");
  button.click();
});
