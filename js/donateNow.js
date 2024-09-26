
// noakhali donate  

document.getElementById("btn-donate-now")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateNow = getInputFieldValueById("input-donate-now");

       // number na hoi tahola donate hobe na..  > validation 
       if(donateNow <= 0 || isNaN(donateNow)){
          alert('Invalid Donation amount');
          return;
       }

    const balance = getTextFieldValueById("donate-balance");
    const mainBalance = getTextFieldValueById('main-balance');

    if(donateNow > mainBalance){
      alert('you do not have enough money to donate');
      return;
    }

    const newBalance = balance + donateNow;

    document.getElementById("donate-balance").innerText = newBalance;

    const newBalance2 = mainBalance - donateNow;

    document.getElementById('main-balance').innerText = newBalance2;

    document.getElementById('my_modal_1').showModal()
    
    const div = document.createElement('div');
    const newDate = new Date().toString();
    const newElement = document.getElementById('transaction-container')
    div.innerHTML= `<div class="border py-4 pl-6 rounded-lg"><p class="text-black"><span class="text-xl font-bold">${donateNow} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</span>;
    </p><p class="text-md text-black p-4 rounded-lg">Date:${newDate}</p></div>`

    newElement.appendChild(div);
  });


  // feni donate 

document.getElementById("btn-feni-donate")
  .addEventListener('click', function (event) {
    event.preventDefault();

    const feniDonate = getInputFieldValueById("input-donate-feni");

     if(feniDonate <= 0 || isNaN(feniDonate)){
      alert('Invalid Donation amount');
      return;
   }

   const balance2 = getTextFieldValueById("feni-donate-balance");
    const mainBalance = getTextFieldValueById('main-balance');

    if(feniDonate > mainBalance){
      alert('you do not have enough money to donate');
      return;
    }
    
    const newBalance2 = balance2 + feniDonate;

    document.getElementById("feni-donate-balance").innerText = newBalance2;

    const newBalance3 = mainBalance - feniDonate;

    document.getElementById('main-balance').innerText = newBalance3;

    document.getElementById('my_modal_2').showModal()


    const div = document.createElement('div');
    const newDate = new Date().toString();
    const newElement = document.getElementById('transaction-container')
    div.innerHTML= `<div class="border py-4 pl-6 rounded-lg"><p class="text-black"><span class="text-xl font-bold">${feniDonate} Taka is Donated for Donate for Flood at Feni, Bangladesh</span>;
    </p><p class="text-md p-4 rounded-lg text-black">Date:${newDate}</p></div>`

    newElement.appendChild(div);
  });



  //  quota donate 

  document.getElementById("btn-quota-donate")
    .addEventListener('click', function(event) {
      event.preventDefault();

      const quotaDonate = getInputFieldValueById("input-donate-quota");


       // number na hoi tahola donate hobe na..  > validation 
     if(quotaDonate <= 0 || isNaN(quotaDonate)){
      alert('Invalid Donation amount');
      return;
   }

      const balance3 = getTextFieldValueById("quota-donate-balance");
      const mainBalance = getTextFieldValueById('main-balance');

      if(quotaDonate > mainBalance){
        alert('you do not have enough money to donate');
        return;
      }

       
    const newBalance3 = balance3 + quotaDonate;

    document.getElementById("quota-donate-balance").innerText = newBalance3;

    const newBalance4 = mainBalance - quotaDonate;

    document.getElementById('main-balance').innerText = newBalance4;

    document.getElementById('my_modal_3').showModal()


      const div = document.createElement('div');
    const newDate = new Date().toString();
    const newElement = document.getElementById('transaction-container')
    div.innerHTML= `<div class="border py-4 pl-6 rounded-lg"><p class="text-black"><span class="text-xl font-bold">${quotaDonate} Taka is Donated for Donate Aid for Injured in the Quota Movement</span>
    </p><p class="text-md text-black p-4 rounded-lg">Date:${newDate}</p></div>`

    newElement.appendChild(div);
    });



