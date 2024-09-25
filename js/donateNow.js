
// noakhali donate  

document.getElementById("btn-donate-now")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateNow = getInputFieldValueById("input-donate-now");

       // number na hoi tahola donate hobe na..  > validation 
       if(isNaN(donateNow)){
          alert('Failed to add money');
          return;
       }

    const balance = getTextFieldValueById("donate-balance");

    const newBalance = balance + donateNow;

    document.getElementById("donate-balance").innerText = newBalance;
    
    const div = document.createElement('div');
    const newDate = new Date().toString();
    const newElement = document.getElementById('transaction-container')
    div.innerHTML= `<div class="border"><p class="text-gray-600"><span class="text-2xl font-bold">${donateNow} Taka is Donated for Donate for Flood at Noakhali, Bangladesh</span>;
    </p><p class="text-md text-gray-500 p-4 rounded-lg">${newDate}</p></div>`

    newElement.appendChild(div);
  });


  // feni donate 

document.getElementById("btn-feni-donate")
  .addEventListener('click', function (event) {
    event.preventDefault();

    const feniDonate = getInputFieldValueById("input-donate-feni");


     // number na hoi tahola donate hobe na..  > validation 
     if(isNaN(feniDonate)){
      alert('Failed to add money');
      return;
   }


    const balance2 = getTextFieldValueById("feni-donate-balance");
    const newBalance2 = balance2 + feniDonate;

    document.getElementById("feni-donate-balance").innerText = newBalance2;


    const div = document.createElement('div');
    const newDate = new Date().toString();
    const newElement = document.getElementById('transaction-container')
    div.innerHTML= `<div class="border"><p class="text-gray-600"><span class="text-2xl font-bold">${feniDonate} Taka is Donated for Donate for Flood at Feni, Bangladesh</span>;
    </p><p class="text-md text-gray-500 p-4 rounded-lg">${newDate}</p></div>`

    newElement.appendChild(div);
  });



  //  quota donate 

  document.getElementById("btn-quota-donate")
    .addEventListener('click', function(event) {
      event.preventDefault();

      const quotaDonate = getInputFieldValueById("input-donate-quota");


       // number na hoi tahola donate hobe na..  > validation 
     if(isNaN(quotaDonate)){
      alert('Failed to add money');
      return;
   }

      const balance3 = getTextFieldValueById("quota-donate-balance");
      const newBalance3 = balance3 + quotaDonate;

      document.getElementById("quota-donate-balance").innerText = newBalance3;


      const div = document.createElement('div');
    const newDate = new Date().toString();
    const newElement = document.getElementById('transaction-container')
    div.innerHTML= `<div class="border"><p class="text-gray-600"><span class="text-2xl font-bold">${quotaDonate} Taka is Donated for Donate Aid for Injured in the Quota Movement</span>;
    </p><p class="text-md text-gray-500 p-4 rounded-lg">${newDate}</p></div>`

    newElement.appendChild(div);
    });


