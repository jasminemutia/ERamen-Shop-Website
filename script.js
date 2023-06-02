const button = document.getElementById("submitbutton");
button.addEventListener("click", function() { 

   const username = document.getElementById("uname").value;
   const email = document.getElementById("email").value;
   const phone = document.getElementById("phone").value;
   const preferences = document.getElementById("preferences").value;
   const terms = document.getElementById("terms");

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
      } else if(phone.length <= 7){
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

   // terms
   if(!terms.checked) {
      alert("You must agree to receive newsletter.");
      return;
    }

   alert("Submitted! We will respond to your message as soon as possible.");
});