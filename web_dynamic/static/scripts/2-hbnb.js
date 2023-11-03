/* global $ */
$(document).ready(function () {
  const amenities = {};

  $('li input[type=checkbox]').change(function () {
    const { id, name } = this.dataset;

    if (this.checked) {
      amenities[name] = id;
    } else {
      delete amenities[name];
    }

    $('.amenities h4').text(Object.keys(amenities).sort().join(', '));
  });
});

// status code
$(document).ready(function () {
  const apiUrl = 'http://0.0.0.0:5001/api/v1/status/';

  $.get(apiUrl, function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
