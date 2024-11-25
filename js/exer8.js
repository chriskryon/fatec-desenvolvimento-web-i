function exer8() {
  const entrada = document.querySelector('#entrada').value;
  if (entrada.length > 0) {
    const li = document.createElement('li');
    const text = document.createTextNode(entrada);
    li.appendChild(text);

    const titulo = document.createAttribute('title');
    titulo.value = entrada;
    li.setAttributeNode(titulo);

    document.querySelector('ol').appendChild(li);
  }
}
