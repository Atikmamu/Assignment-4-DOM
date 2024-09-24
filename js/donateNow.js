
// noakhali donate  

document.getElementById("btn-donate-now")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateNow = getInputFieldValueById("input-donate-now");

    const balance = getTextFieldValueById("donate-balance");
    const newBalance = balance + donateNow;

    document.getElementById("donate-balance").innerText = newBalance;
  });


  // feni donate 

document.getElementById("btn-feni-donate")
  .addEventListener('click', function (event) {
    event.preventDefault();

    const feniDonate = getInputFieldValueById("input-donate-feni");

    const balance2 = getTextFieldValueById("feni-donate-balance");
    const newBalance2 = balance2 + feniDonate;

    document.getElementById("feni-donate-balance").innerText = newBalance2;
  });



  //  quota donate 

  document.getElementById("btn-quota-donate")
    .addEventListener('click', function(event) {
      event.preventDefault();

      const quotaDonate = getInputFieldValueById("input-donate-quota");

      const balance3 = getTextFieldValueById("quota-donate-balance");
      const newBalance3 = balance3 + quotaDonate;

      document.getElementById("quota-donate-balance").innerText = newBalance3;
    });
