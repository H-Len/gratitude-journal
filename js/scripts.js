//backend logic


function Person (firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
}

function MyJournal (author) {
  //journal entries must be an array
  this.journalEntries = [];
  this.author = author;

  //add journal entry to array
  this.addJEntry = function (newJournalEntry) {
    if (newJournalEntry instanceof JournalEntry) {
      this.journalEntries = this.journalEntries.concat(newJournalEntry);
    } else {
      throw("Not a valid journal entry.");
    }

    if (newJournalEntry){
      // $('#journalEntries').prepend("<li><input id='check' name='check' type='checkbox'/>" + Description + "</li>");

      //Setting input to local storage

    }
  }
}

function JournalEntry (date, entry) {
  this.date = date;
  this.entry = entry;
}

var author = new Person("bob", "smith", "bsmi@aol.com");

var exclaim = new JournalEntry("05/15/19", "Blah!");

var journalEntries = [exclaim];

var lethargy = new JournalEntry("051519", "woo...hooo");
journalEntries = journalEntries.concat(lethargy);

//without journalEntries parameter, need new method for passing in journal entries
var ummJournal = new MyJournal(author);
ummJournal.addJEntry(exclaim);
ummJournal.addJEntry(lethargy);

//this combines code in a more compact form than lines 28-37; achieves same result
var aDiffJournal = new MyJournal(new Person("first", "last", "email"));

aDiffJournal.addJEntry(new JournalEntry("01.11.1111", "string"));

aDiffJournal.addJEntry(lethargy);
aDiffJournal.addJEntry(exclaim);
aDiffJournal.addJEntry(new JournalEntry("05/22/19", "negativity, remorse, hopelessness"));


//method to count the number of journal entries
MyJournal.prototype.entryCount = function () {
  return this.journalEntries.length;
}

MyJournal.prototype.addToLocal = function () {


};





//frontend logic


//
// $(function() {
//   $("#datepicker").datepicker();
// });

$(document).ready(function() {

  var selectDate = $("#selectDate").val();


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
    $('ul#gratefulNotes').append('<li>' + timeStamp + " " + someInput1 + n + '</li>');
  });


  $("form#greatful-2").submit(function(event) {
    console.log("I'm at a cafe");
    var someInput2 = $("input#gratitude-2").val();
    console.log(someInput2);
    event.preventDefault();
  });
});
