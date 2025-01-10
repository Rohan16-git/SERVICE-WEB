$(document).ready(function() {
    $('#signup-form').submit(function(event) {
      event.preventDefault();  // Prevent form from submitting

      // Clear previous error messages
      $('.error').hide();

      // Get form field values
      var username = $('#username').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var confirmPassword = $('#confirm-password').val();
      
      // Validation logic
      var valid = true;

      // Validate Username
      if (username === '') {
        $('#username-error').show();
        valid = false;
      }

      // Validate Email
      var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (email === '' || !emailPattern.test(email)) {
        $('#email-error').show();
        valid = false;
      }

      // Validate Password
      if (password === '') {
        $('#password-error').show();
        valid = false;
      }

      // Validate Confirm Password
      if (confirmPassword !== password) {
        $('#confirm-password-error').show();
        valid = false;
      }

      // If form is valid, you can proceed with the signup process (e.g., send to server)
      if (valid) {
        // For demonstration, show a success message
        alert('Sign Up successful!');
        // Here you can redirect the user or handle the signup process.
      }
    });
  });