function createDiv(container) {
  const div = document.createElement('div');
  div.className = 'come-class';
  div.innerText = 'someText123456';
  container.appendChild(div);
}

export default createDiv;
