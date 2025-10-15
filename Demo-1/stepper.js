function createStepper() {
  let count = 0;

  const container = document.createElement('div');
  container.className = 'stepper';
  container.innerHTML = `
  <button class="decrement">-</button>
  <span class="counter">${count}</span>
  <button class="increment">+</button>
  `;


  document.body.appendChild(container);

  return container;
}

module.exports = { createStepper };