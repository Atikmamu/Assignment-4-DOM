
document.getElementById("btn-donate-now")
  .addEventListener('click', function (event) {
    event.preventDefault();

    
    const balanceReduce = getInputFieldValueById('input-donate-now');

    const balance = getTextFieldValueById('account-balance');
    const newBalance = balance - balanceReduce;

    document.getElementById('account-balance').innerText = newBalance;
  });


document.getElementById("btn-feni-donate")
   .addEventListener('click', function(event) {
    event.preventDefault();

    const balanceReduce = getInputFieldValueById('input-donate-feni');

    const balance = getTextFieldValueById('account-balance');
    const newBalance = balance - balanceReduce;

    document.getElementById('account-balance').innerText = newBalance;
  });


document.getElementById("btn-quota-donate")
    .addEventListener('click', function(event) {
    event.preventDefault();

    const balanceReduce = getInputFieldValueById('input-donate-quota');

    const balance = getTextFieldValueById('account-balance');
    const newBalance = balance - balanceReduce;

    document.getElementById('account-balance').innerText = newBalance;
    });



