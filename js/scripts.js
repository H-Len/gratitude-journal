$(document).ready(function() {
  $("form#greatful-1").submit(function(event) {
    var someInput = $("input#some-input").val();

    event.preventDefault();
  });
});
