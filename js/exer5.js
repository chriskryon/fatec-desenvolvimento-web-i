function exer5() {
  const entrada = document.querySelector('#entrada').value;
  const p = document.createElement('p');
  const text = document.createTextNode(entrada);
  p.appendChild(text);

  document.querySelector('#saida').appendChild(p);
}
