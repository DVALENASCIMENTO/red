async function carregarServicos() {
  const res = await fetch('js/catalogo-servicos.json');
  const dados = await res.json();
  const container = document.getElementById('lista-servicos');

  dados.forEach(categoria => {
    const div = document.createElement('div');
    div.className = 'servico';
    div.innerHTML = `<h2>${categoria.titulo}</h2>`;
    div.onclick = () => mostrarPopup(categoria);
    container.appendChild(div);
  });
}

function mostrarPopup(categoria) {
  document.getElementById('popup-titulo').innerText = categoria.titulo;
  const ul = document.getElementById('popup-itens');
  ul.innerHTML = '';

  categoria.subservicos.forEach(servico => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${servico.titulo}</strong><ul>` +
      servico.subservicos.map(sub => `<li>${sub}</li>`).join('') + '</ul>';
    ul.appendChild(li);
  });

  document.getElementById('popup').style.display = 'flex';
}

function fecharPopup() {
  document.getElementById('popup').style.display = 'none';
}

carregarServicos();
