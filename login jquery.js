// login page jquery
$(document).ready(function() {
  $('#login-form').submit(function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Clear previous error messages
    $('.error').hide();

    // Get form field values
    var username = $('#username').val();
    var password = $('#password').val();
    
    // Validation logic
    var valid = true;
    
    if (username === '') {
      $('#username-error').show();
      valid = false;
    }

    if (password === '') {
      $('#password-error').show();
      valid = false;
    }

    // If form is valid, you can proceed with the login process (e.g., send to server)
    if (valid) {
      // For demonstration, show a success message
      alert('Login successful!');
      // Here you can redirect the user or handle the login process.
    }
  });
});