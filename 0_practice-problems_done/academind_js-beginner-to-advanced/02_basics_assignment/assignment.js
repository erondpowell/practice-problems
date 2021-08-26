const task3Element = document.getElementById('task-3');

function alrt() {
  alert('bq steamroller');
}

function alertName(name) {
  alert(`${name}`);
}

alrt();
alertName('Boofron Bowel');

task3Element.addEventListener('click', alrt);

function combine3(a, b, c) {
  return a + ' ' + b + ' ' + c;
}

alert(combine3('boof', 'queef', 'boys'));
