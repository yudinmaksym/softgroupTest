function validate() {

   var firstNameError =  document.getElementById('firstName');
   var lastNameError =  document.getElementById('lastName');
   var phoneNmbError = document.getElementById('phoneNmb');

   if ( ( document.contactForm.firstName.value && document.contactForm.lastName.value && document.contactForm.phoneNmb.value ) == "" ) {
      firstNameError.innerHTML = "Please provide your First Name";
      lastNameError.innerHTML = "Please provide your Last Name";
      phoneNmbError.innerHTML = "Please provide your phone number";
      return false;
   }

   var data = "First name:" + document.contactForm.firstName.value + " " + "Last Name:" + document.contactForm.lastName.value + " " + "Phone number:" + document.contactForm.phoneNmb.value;
   return ajax(data);
}

function ajax(data) {
   var xmlhttp;
   if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
   } else {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
   }

   xmlhttp.open('GET', 'index.html');

   xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState != 4 && xmlhttp.status == 200) {
         alert("Validating..");
      } 
      else if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            alert(data);
         } 
         else {
            alert( "Error Occurred." );
         }
   }
   
   xmlhttp.send(data);  
}