$(document).ready(function() {
    $('.read-more-btn').on('click', function() {
      // Get the service name and description from the data attributes
      var serviceTitle = $(this).data('service');
      var serviceDescription = $(this).data('description');
      
      // Update modal content
      $('#modal-service-title').text(serviceTitle);
      $('#modal-service-description').text(serviceDescription);
    });
  });