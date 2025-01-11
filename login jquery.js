
$(document).ready(function() {
  $('#login-form').submit(function(event) {
    event.preventDefault();  

    
    $('.error').hide();

   
    var username = $('#username').val();
    var password = $('#password').val();
    
   
    var valid = true;
    
    if (username === '') {
      $('#username-error').show();
      valid = false;
    }

    if (password === '') {
      $('#password-error').show();
      valid = false;
    }

   
    if (valid) {
     
      alert('Login successful!');
      
    }
  });
});