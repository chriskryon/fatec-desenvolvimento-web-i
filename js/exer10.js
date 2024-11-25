function exer10() {
  const entrada = document.querySelector('#entrada').value;
  if (entrada.length > 0) {
    const li = document.createElement('li');
    const text = document.createTextNode(entrada);
    li.appendChild(text);

    const titulo = document.createAttribute('title');
    titulo.value = entrada;
    li.setAttributeNode(titulo);
    li.onclick = exibir;

    document.querySelector('#saida').appendChild(li);
    document.querySelector('#total').innerHTML =
      document.querySelectorAll('#saida li').length;
  }
}

function exibir() {
  alert('Exibindo');
}
