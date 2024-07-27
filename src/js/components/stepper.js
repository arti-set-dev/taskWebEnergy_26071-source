import vars from "../_vars.js";
import { allowNumbersOnly } from "../functions/allowNumbersOnly.js";

const isNotApple = () => {
  if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    return false;
  }
  return true;
};

vars.stepperElems?.forEach(stepper => {
  const stepperInput = stepper.querySelector('.stepper__input');
  const stepperBtnUp = stepper.querySelector('.stepper__btn--up');
  const stepperBtnDown = stepper.querySelector('.stepper__btn--down');

  let count = stepperInput.value;

  stepperInput.addEventListener('keyup', (e) => {
    let self = e.currentTarget;

    if (isNotApple) {
      self.style.width = `${self.value.length + 1}ex`;
    } else {
      self.style.width = `${self.value.length + 2}ex`;
    }

    count = stepperInput.value;

    if (count == 0) {
      stepperBtnDown.classList.add('stepper__btn--disabled');
    } else {
      stepperBtnDown.classList.remove('stepper__btn--disabled');
    }
  });

  stepperInput.addEventListener('keypress', (e) => {
    allowNumbersOnly(e);
  });

  stepperInput.addEventListener('change', (e) => {
    let self = e.currentTarget;

    if (!self.value) {
      self.value = 0;
    }

    count = stepperInput.value;

    if (count == 0) {
      stepperBtnDown.classList.add('stepper__btn--disabled');
    } else {
      stepperBtnDown.classList.remove('stepper__btn--disabled');
    }
  });

  stepperBtnUp.addEventListener('click', (e) => {
    e.preventDefault();

    count++;

    if (count == 0) {
      stepperBtnDown.classList.add('stepper__btn--disabled');
    } else {
      stepperBtnDown.classList.remove('stepper__btn--disabled');
    }

    stepperInput.value = count;

    if (isNotApple) {
      stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
    } else {
      stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
    }
  });

  stepperBtnDown.addEventListener('click', (e) => {
    e.preventDefault();

    count--;

    if (count == 0) {
      stepperBtnDown.classList.add('stepper__btn--disabled');
    } else {
      stepperBtnDown.classList.remove('stepper__btn--disabled');
    }

    stepperInput.value = count;

    if (isNotApple) {
      stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
    } else {
      stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
    }
  });
})
