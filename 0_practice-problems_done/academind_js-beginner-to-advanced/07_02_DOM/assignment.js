const task1 = document.getElementById("task-1");
const task1_1 = document.querySelector('li');

console.log(task1);
console.log(task1_1);

const change = () => {
  task1.style.backgroundColor = "black";
  task1_1.style.color = "white";
}

change();


// Change the document title (in <head></head>) to "Assignment - Solved!".
// Use two different ways for getting access to the <title> element:
// Via querySelector on document and via querySelector on the certain property you find in document.

const title = document.head.querySelector('title');
const title2 = document.querySelector('title');
title.innerHTML = "Assignment Solved 3.0!";


// Select the <h1> element on this page and change its text to "Assignment - Solved!".
const h1 = document.getElementsByTagName('h1');
const h1_1 = document.querySelector('h1');
h1[0].textContent = 'Assignment - Solved!'
