const { createStepper } = require('./stepper');

describe('Stepper Component', () => {

  beforeEach(() => {
    document.body.innerHTML = '';
  });


  test('initial counter displays 0', () => {
    const container = createStepper();
    const counter = container.querySelector('.counter');
    expect(counter.textContent).toBe("0");
  });
});