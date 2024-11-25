function exer6() {
  const entrada = document.querySelector('#entrada').value;
  const p = document.createElement('p');
  const text = document.createTextNode(entrada);
  p.appendChild(text);

  const titulo = document.createAttribute('title');
  titulo.value = 'Nome fornecido';
  p.setAttributeNode(titulo);

  document.querySelector('#saida').appendChild(p);
}
