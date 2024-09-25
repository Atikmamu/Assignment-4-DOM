
document.getElementById("btn-donate-now")
  .addEventListener('click', function (event) {
    event.preventDefault();

    
    const balanceReduce = getInputFieldValueById('input-donate-now');

    // validation...> number na hoi 
          if(isNaN(balanceReduce)){
            alert('Failed to balance.');
            return;
          }

    const balance = getTextFieldValueById('account-balance');

     // validation... balance ar chaye donate bashi hoila -10000
     if(balanceReduce > balance) {
      alert('you do not have enough money to cash out');
      return;
     }

    const newBalance = balance - balanceReduce;

    document.getElementById('account-balance').innerText = newBalance;

    document.getElementById('my_modal_1').showModal()
  });


document.getElementById("btn-feni-donate")
   .addEventListener('click', function(event) {
    event.preventDefault();

    const balanceReduce = getInputFieldValueById('input-donate-feni');

    // validation
    if(isNaN(balanceReduce)) {
      alert('Failed to balance.');
      return;
    }

    const balance = getTextFieldValueById('account-balance');

     // validation..> -1000
     if(balanceReduce > balance) {
      alert('you do not have enough money to cash out');
      return;
     }



    const newBalance2 = balance - balanceReduce;

    document.getElementById('account-balance').innerText = newBalance2;

    document.getElementById('my_modal_2').showModal()
  });


document.getElementById("btn-quota-donate")
    .addEventListener('click', function(event) {
    event.preventDefault();

    const balanceReduce = getInputFieldValueById('input-donate-quota');

    if(isNaN(balanceReduce)){
      alert('Failed to balance.');
    }


    const balance = getTextFieldValueById('account-balance');


     // validation..> -1000
     if(balanceReduce > balance) {
      alert('you do not have enough money to cash out');
      return;
     }


    const newBalance3 = balance - balanceReduce;

    document.getElementById('account-balance').innerText = newBalance3;

    document.getElementById('my_modal_3').showModal()
    });



