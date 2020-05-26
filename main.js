let output = document.querySelector('#output');
output.style.display = 'none';

document.querySelector('#lbsinput').addEventListener('input',convertWeight);

function convertWeight(e) {
  let pounds = e.target.value;

  output.style.display = 'block';
  document.querySelector('#gramsOutput').innerHTML = pounds/0.00220462;
  document.querySelector('#kgOutput').innerHTML = pounds/2.20462;
  document.querySelector('#ozOutput').innerHTML = pounds*16;
}
