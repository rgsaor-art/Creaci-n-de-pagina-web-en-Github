const botonTema = document.querySelector('#boton-tema');
const temaGuardado = localStorage.getItem('tema');

if (temaGuardado === 'oscuro') {
  document.body.classList.add('oscuro');
  botonTema.textContent = '☀';
}

botonTema.addEventListener('click', () => {
  document.body.classList.toggle('oscuro');
  const oscuro = document.body.classList.contains('oscuro');
  botonTema.textContent = oscuro ? '☀' : '☾';
  localStorage.setItem('tema', oscuro ? 'oscuro' : 'claro');
});
