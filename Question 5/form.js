const regNum = /^[0-9]*$/g;
const form = document.getElementById('form');
const inputs = form.querySelectorAll('input');

form.addEventListener('submit', e => {
  console.log('hola');
  e.preventDefault();
  let i = 0;
  while (i < inputs.length) {
    if (inputs[i].value.match(regNum) && inputs[i].value !== '') {
      inputs[i].classList.remove('error');
      inputs[i].classList.add('no-error');
    } else {
      inputs[i].classList.remove('no-error');
      inputs[i].classList.add('error');
    }
    i++;
  }
});
