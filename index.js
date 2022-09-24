const balance = document.getElementById('balance');
const assetBalance = document.getElementById('assetBalance')
const asset_plus = document.getElementById('asset-plus')

const asset_minus = document.getElementById('asset-minus')

const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const assetList = document.getElementById('assetList');
const form = document.getElementById('form');
const assetForm = document.getElementById('assetForm');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const assetAmount = document.getElementById('assetAmount');
const assetText = document.getElementById('assetText')


const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a text and amount');
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value
    };

    transactions.push(transaction);
  

    addTransactionDOM(transaction);

    updateValues();

    updateLocalStorage();

    text.value = '';
    amount.value = '';
  }
}
// asset local storage below
const localStorageAssets = JSON.parse(
  localStorage.getItem('assets')
);




let assets = 
  localStorage.getItem('assets') !== null ? localStorageAssets : [];

  //add asset
  function addAsset(e) {
    e.preventDefault();
  
    if(assetText.value.trim() === '' || assetAmount.value.trim() === '') {
      alert('Please add a text amount');
    } else {
      const asset = {
        id: generateID(),
        text: assetText.value,
        amount: +assetAmount.value
      };

      assets.push(asset);

      addAssetDOM(asset);

      updateAsset();

      updateLocalStorage()

      assetText.value = '';
      assetAmount.value = '';
    }
  }

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

// Add transactions to DOM list
function addTransactionDOM(transaction) {
  // Get sign
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');

  // Add class based on value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus' );

  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">x</button>
  `;

  list.appendChild(item);
}

// add asset to DOM list

function addAssetDOM(asset) {
  console.log(asset);
  //get the sign
  const sign = asset.assetAmount < 0 ? '-' : '+';

console.log(sign);

  const item = document.createElement('li');

  // const showAsset = sign.value();
  // console.log(showAsset);

  //class added based on value 
  item.classList.add(asset.assetAmount < 0 ? 'minus' : 'plus');

  console.log(asset.assetAmount);


  item.innerHTML = `
  ${asset.text} <span id=>${sign}${Math.abs(
    asset.amount
  )}</span> <button class="asset-delete" onclick="removeAsset(${
    asset.id
  })">x</button>
  `;
console.log(asset.text, asset.amount);

  assetList.appendChild(item)
  console.log(document.querySelector('span').innerHTML)
};

// Update the balance, income and expense
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}

function updateAsset() {
  const assetAmount = assets.map(asset => asset.amount);

  const assetTotal = assetAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  
  const assetDepreciation = (
    assetAmount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);


  const assetAppreciation = assetAmount
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);



    assetBalance.innerText = `$${assetTotal}`;
    asset_plus.innerText = `$${assetAppreciation}`;
    asset_minus.innerText = `$${assetDepreciation}`;

}

// Remove transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);

  updateLocalStorage();

  init();
}

//removes asset by id
function removeAsset(id) {
  assets = assets.filter(asset => asset.id !== id);

  updateLocalStorage();

  init()
}
// Update local storage transactions
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
  localStorage.setItem('assets', JSON.stringify(assets));
}

// Init app
function init() {
  list.innerHTML = '';
  assetList.innerHTML = '';
  

  transactions.forEach(addTransactionDOM);
  assets.forEach(addAssetDOM);
  updateValues();
  updateAsset();
}

init();

form.addEventListener('submit', addTransaction);
assetForm.addEventListener('submit', addAsset);