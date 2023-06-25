const cardForm = document.querySelector('#card-form');
const cardTable = document.querySelector('#card-table tbody');
const cardThumbnail = document.querySelector('#card-thumbnail');

cardForm.addEventListener('input', () => {
  updateCardThumbnail();
});

cardForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const bankName = document.getElementsByName('bankName')[0].value;
  const paymentSystem = document.getElementsByName('paymentSystem')[0].value;
  const cardNumber = document.getElementsByName('cardNumber')[0].value;
  const cardholderName = document.getElementsByName('cardholderName')[0].value;
  const expiryDate = document.getElementsByName('expiryDate')[0].value;

  const row = cardTable.insertRow();
  row.innerHTML = `
    <td>${bankName}</td>
    <td>${paymentSystem}</td>
    <td>${cardNumber}</td>
    <td>${cardholderName}</td>
    <td>${expiryDate}</td>
`;

cardForm.reset();
updateCardThumbnail();
});

function updateCardThumbnail() {
const bankName = document.getElementsByName('bankName')[0].value;
const paymentSystem = document.getElementsByName('paymentSystem')[0].value;
const cardNumber = document.getElementsByName('cardNumber')[0].value;
const cardholderName = document.getElementsByName('cardholderName')[0].value;
const expiryDate = document.getElementsByName('expiryDate')[0].value;

cardThumbnail.innerHTML = `
<span>${bankName}</span>
<span>${paymentSystem.toUpperCase()}</span>
<span>${formatCardNumber(cardNumber)}</span>
<span>${cardholderName.toUpperCase()}</span>
<span>${formatExpiryDate(expiryDate)}</span>
`;
}

function formatCardNumber(cardNumber) {
return cardNumber.replace(/(\d{4})/g, '$1 ').trim();
}

function formatExpiryDate(expiryDate) {
if (!expiryDate) {
return '';
}

const [year, month] = expiryDate.split('-');
return `${month}/${year.slice(2)}`;
}