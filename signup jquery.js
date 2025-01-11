$(document).ready(function() {
    $('#signup-form').submit(function(event) {
      event.preventDefault(); 

      
      $('.error').hide();

     
      var username = $('#username').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var confirmPassword = $('#confirm-password').val();
      
     
      var valid = true;

      
      if (username === '') {
        $('#username-error').show();
        valid = false;
      }

      
      var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (email === '' || !emailPattern.test(email)) {
        $('#email-error').show();
        valid = false;
      }

      
      if (password === '') {
        $('#password-error').show();
        valid = false;
      }

      
      if (confirmPassword !== password) {
        $('#confirm-password-error').show();
        valid = false;
      }

      
      if (valid) {
        
        alert('Sign Up successful!');
       
      }
    });
  });