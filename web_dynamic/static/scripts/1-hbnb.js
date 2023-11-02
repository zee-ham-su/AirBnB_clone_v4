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
