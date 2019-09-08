const convertTemp = e => {
  let inputC = parseFloat($('.inputC').val());
  let inputF = parseFloat($('.inputF').val());
  let inputK = parseFloat($('.inputK').val());

  if (e.target.classList.contains('inputC')) {
    if (!e.target.value || !e.target.value.match(/[\d.]/)) {
      $('.inputF').val('');
      $('.inputK').val('');
    } else {
      inputF = inputC * (9/5) + 32;
      inputK = inputC + 273.15;
      $('.inputF').val(inputF.toFixed(2));
      $('.inputK').val(inputK.toFixed(2));
    }
  } else if (e.target.classList.contains('inputF')) {
    if (!e.target.value || !e.target.value.match(/[\d.]/)) {
      $('.inputC').val('');
      $('.inputK').val('');
    } else {
      inputC = (inputF - 32) * 5/9;
      inputK = (inputF - 32) * 5/9 + 273.15;
      $('.inputC').val(inputC.toFixed(2));
      $('.inputK').val(inputK.toFixed(2));
    }
  } else if (e.target.classList.contains('inputK')) {
    if (!e.target.value || !e.target.value.match(/[\d.]/)) {
      $('.inputC').val('');
      $('.inputF').val('');
    } else {
      inputC = inputK - 273.15;
      inputF = (inputK - 273.15) * 1.8 + 32;
      $('.inputC').val(inputC.toFixed(2));
      $('.inputF').val(inputF.toFixed(2));
    }
  }
}

$('.input').on('keyup', convertTemp);