function exer4() {
  const entrada = document.getElementById('entrada').value;
  const p = document.createElement('p');
  const text = document.createTextNode(entrada);
  p.appendChild(text);

  document.getElementById('saida').appendChild(p);
}
