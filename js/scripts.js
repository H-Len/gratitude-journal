$(document).ready(function() {
  $("#loadJournal").click(function(event) {
    console.log("smile");
    $("#journal").toggle();
  });

  $("form#greatful-1").submit(function(event) {
    console.log("I'm here");
    var someInput1 = $("input#gratitude-1").val();
    console.log(someInput1);
    event.preventDefault();
  });

  $("form#greatful-2").submit(function(event) {
    console.log("I'm at a cafe");
    var someInput2 = $("input#gratitude-2").val();
    console.log(someInput2);
    event.preventDefault();
  });
});
