const billInput = document.querySelector('[data-bill-input]');
const peopleInput = document.querySelector('[data-people-input]');
const tipsPercentage = document.querySelectorAll('.tip');
const tipPerPerson = document.querySelector('[data-tip-amount] span');
const totalTip = document.querySelector('[data-tip-total] span');
const customTip = document.querySelector('[data-custom-tip]');
const reset = document.querySelector('.reset');
const errorMessage = document.querySelector('.errorMessage');

const activeClass = 'active-tip';
let billValue = 0;
let peopleValue = 0;
let tipValue = 0;

const getBillValue = () => {
  billValue = parseFloat(billInput.value);
  calculateTip();
}

const getPeopleValue = () => {
  peopleValue = parseFloat(peopleInput.value);
  
  if (peopleValue < 1 || '') {
    errorMessage.style.display = 'inline-block';
    peopleInput.style.border = '2px solid var(--error-msg-color)';
  } else {
    errorMessage.style.display = 'none';
    peopleInput.style.border = 'none';
    calculateTip();
  }
}

const handleTipClick = (event) => {
  tipsPercentage.forEach(tip => {
    tip.classList.remove(activeClass);
    if (event.target.innerHTML === tip.innerHTML) {
      tip.classList.add(activeClass);
      tipValue = parseFloat(tip.innerHTML) / 100;
    }
  });
  calculateTip();
}

tipsPercentage.forEach(tip => tip.addEventListener('click', handleTipClick));

const calculateTip = () => {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let totalAmount = (billValue / peopleValue) + tipAmount;
    tipPerPerson.innerHTML = `$${tipAmount.toFixed(2)}`;
    totalTip.innerHTML = `$${totalAmount.toFixed(2)}`;
  }
}

const getCustomTip = () => {
  tipValue = parseFloat(customTip.value / 100);

  tipsPercentage.forEach(tip => tip.classList.remove(activeClass));
  calculateTip();
}

const resetButton = () => {
  billInput.value = '';
  getBillValue();
  peopleInput.value = '';
  getPeopleValue();
  customTip.value = '';
  getCustomTip();

  tipPerPerson.innerHTML = `$0.00`;
  totalTip.innerHTML = `$0.00`;
}

billInput.addEventListener('input', getBillValue);
peopleInput.addEventListener('input', getPeopleValue);
customTip.addEventListener('input', getCustomTip);
reset.addEventListener('click', resetButton);