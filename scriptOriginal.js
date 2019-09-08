const convertTemp = e => {
  let inputC = parseFloat(document.querySelector('.inputC').value);
  let inputF = parseFloat(document.querySelector('.inputF').value);
  let inputK = parseFloat(document.querySelector('.inputK').value);

  if (e.target.classList.contains('inputC')) {
    if (!e.target.value || !e.target.value.match(/[\d.]/)) {
      document.querySelector('.inputF').value = '';
      document.querySelector('.inputK').value = '';
    } else {
      inputF = inputC*(9/5) + 32;
      inputK = inputC + 273.15;
      document.querySelector('.inputF').value = inputF.toFixed(2);
      document.querySelector('.inputK').value = inputK.toFixed(2);
    }
  } else if (e.target.classList.contains('inputF')) {
      if (!e.target.value || !e.target.value.match(/[\d.]/)) {
        document.querySelector('.inputC').value = '';
        document.querySelector('.inputK').value = '';
      } else {
        inputC = (inputF - 32) * 5/9;
        inputK = (inputF-32) * (5/9) + 273.15;
        document.querySelector('.inputC').value = inputC.toFixed(2);
        document.querySelector('.inputK').value = inputK.toFixed(2);
      }
  } else if (e.target.classList.contains('inputK')) {
      if (!e.target.value || !e.target.value.match(/[\d.]/)) {
        document.querySelector('.inputC').value = '';
        document.querySelector('.inputF').value = '';
      } else {
        inputC = inputK - 273.15;
        inputF = (inputK - 273.15) * 1.8 + 32;
        document.querySelector('.inputC').value = inputC.toFixed(2);
        document.querySelector('.inputF').value = inputF.toFixed(2);
      }
  }
}

const inputs = document.querySelectorAll('.input');
inputs.forEach(input => input.addEventListener('keyup', convertTemp));
