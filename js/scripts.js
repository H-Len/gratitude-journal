function Person (firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
}

function MyJournal (journalEntries, author) {
  this.journalEntries = journalEntries;
  this.author = author;
  //add journal entry to array
  this.addJEntry = function (newJournalEntry) {
    if (newJournalEntry instanceof JournalEntry) {
      this.journalEntries = this.journalEntries.concat(newJournalEntry);
    } else {
      throw("Not a valid journal entry.");
    }
  }

}



function JournalEntry (date, entry) {
  this.date = date;
  this.entry = entry;
}

var author = new Person("bob", "smith", "bsmi@aol.com");

var exclaim = new JournalEntry ("05/15/19", "Blah!");

var journalEntries = [exclaim];

var lethargy = new JournalEntry("051519", "woo...hooo");
journalEntries = journalEntries.concat(lethargy);

var ummJournal = new MyJournal(journalEntries, author);



$(function() {
  $( "#datepicker" ).datepicker();
});

$(document).ready(function() {
  // $(p#date).text(function () {
  //   let today = new Date();
  // });

  // get a new date (locale machine date time)
  var date = new Date();
  // get the date as a string
  var n = date.toDateString();
  // get the time as a string
  var time = date.toLocaleTimeString();

  // find the html element with the id of time
  // set the innerHTML of that element to the date a space the time

  var timeStamp = n + " " + time;

  document.getElementById('time').innerHTML = timeStamp;

  $("#loadJournal").click(function(event) {
    console.log("smile");
    $("#journal").toggle();
  });

  $("form#greatful-1").submit(function(event) {
    console.log(timeStamp);
    var someInput1 = $("input#gratitude-1").val();
    console.log(someInput1);
    event.preventDefault();
    $('li.question1Answer').append(someInput1 + '<br>');
  });


  $("form#greatful-2").submit(function(event) {
    console.log("I'm at a cafe");
    var someInput2 = $("input#gratitude-2").val();
    console.log(someInput2);
    event.preventDefault();
  });
});
