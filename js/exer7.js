function exer7() {
  const entrada = document.querySelector('#entrada').value;
  const li = document.createElement('li');
  const text = document.createTextNode(entrada);
  li.appendChild(text);

  const titulo = document.createAttribute('title');
  titulo.value = entrada;
  li.setAttributeNode(titulo);

  document.querySelector('ol').appendChild(li);
}
