function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');




createBtn.addEventListener('click', () => {
    const amount = parseInt(input.value);
    if (amount < 1 || amount > 100 || isNaN(amount)) {
      alert('Please enter a number between 1 and 100.');
      return;
    }
  
    boxesContainer.innerHTML = '';
    
    createBoxes(amount);
    input.value = '';
  });
  
  destroyBtn.addEventListener('click', () => {
    boxesContainer.innerHTML = '';  
  });
  
  function createBoxes(amount) {
    const boxSize = 30;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${boxSize + i * 10}px`;
      box.style.height = `${boxSize + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
    }
    boxesContainer.appendChild(fragment);
  }


