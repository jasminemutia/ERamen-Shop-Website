const button = document.getElementById("submitbutton");
button.addEventListener("click", function() { 

   const username = document.getElementById("uname").value;
   const email = document.getElementById("email").value;
   const phone = document.getElementById("phone").value;
   const preferences = document.getElementById("preferences").value;
   const address = document.getElementById("address").value;

   // full name
   if(username.length < 5){
      alert('Name must be at least 5 characters long!');
      return; 
   }

   // email
   if(!email.endsWith('@gmail.com')) {
      alert("Email must end with @gmail.com");
      return;
   }

   // phone number
   let number = false, noLetter = false;
   for(let i = 0; i < phone.length; i++) {
      if(phone[i] >= '0' && phone[i] <= '9') {
         number = true;
      } else if(!phone[i] >= 'A' && !phone[i] <= 'Z' || !phone[i] >= 'a' && !phone[i] <= 'z') {
         noLetter = true;
      } else if(phone.length < 8){
         alert('Phone number must be valid!');
         return; 
      }
      if(number && noLetter) break;
   }
   if(!number && !noLetter) {
      alert("Phone number must contains number!");
      return;
   }

   // preferences
   if (preferences == "") {
      alert("Please select your preferences!");
      return;
   }

   // address
   let  letter = false;
   for(let i = 0; i < address.length; i++) {
      if(address[i] >= 'a' && address[i] <= 'z' || address[i] >= 'A' && address[i] <= 'Z') {
         letter = true;
      } else if(address.length < 10){
         alert('Address must be valid!');
      }
      if(letter) break;
   }
   if(!letter) {
      alert("Please fill a valid address!");
      return;
   }

   alert("Submitted! Your orders will arrive soon.");
});


