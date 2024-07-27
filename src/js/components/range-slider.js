import noUislider from 'nouislider';
import vars from "../_vars.js";
import { allowNumbersOnly } from '../functions/allowNumbersOnly.js';

const minInput = document.querySelector('.filter__field-min');
const maxInput = document.querySelector('.filter__field-max');

const setValueInput = (unencoded) => {
  minInput.value = unencoded[0].toFixed(0);
  maxInput.value = unencoded[1].toFixed(0);
}

if (vars.rangeSliderEl) {
  noUislider?.create(vars.rangeSliderEl, {
    start: [5, 40000],
    connect: true,
    range: {
      'min': 0,
      'max': 100000
    },
  });
}

document.addEventListener('DOMContentLoaded' , () => {
  vars.rangeSliderEl?.noUiSlider.on('update', (values, handle, unencoded) => {
    setValueInput(unencoded);
  });

  minInput?.addEventListener('change', function () {
    vars.rangeSliderEl?.noUiSlider.set([this.value, null]);
  })

  minInput?.addEventListener('keypress', function (e) {
    allowNumbersOnly(e);
  })

  maxInput?.addEventListener('change', function () {
    vars.rangeSliderEl?.noUiSlider.set([null, this.value]);
  })

  maxInput?.addEventListener('keypress', function (e) {
    allowNumbersOnly(e);
  })
})
