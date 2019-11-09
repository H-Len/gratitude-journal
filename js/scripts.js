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

//localStorage function
function storeInJournal (item, value) {
  var myEntries = JSON.parse(localStorage['myEntries']);
  localStorage.getItem(item, value);
  myEntries.push(value);
  localStorage['myEntries'] = JSON.stringify(myEntries);
}


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

  $(".logIn").click(function() {
    let userName = $("input[name=uname]").val();
    console.log(userName);
    let passWord = "123";
    $(".bookKey").click(function() {
      let welcomeBanner = "It's good to see you! Welcome back " + userName + ".";
      if(passWord === "123"){
        $(".logIn").hide();
        $("#displayBanner").show();
        $("#displayBanner").text(welcomeBanner);
      }
      console.log("Aquarius");
    });
  });
  $("#loadJournal").click(function(event) {
    event.preventDefault();
    $(".logIn").hide();
    $(".openBook").show();
    $("#journal").toggle();
  });

  $("form#greatful-1").submit(function(event) {
    console.log(timeStamp);
    var someInput1 = $("input#gratitude-1").val();
    // console.log(someInput1);
    event.preventDefault();
    $('ul#gratefulNotes').append('<li>'/*timeStamp*/ + "  " + someInput1 + " -- " + n + '</li>');

    // // a localStorage function will be created in backend at a later time
    // localStorage.getItem('entry', someInput1);
    // // localStorage['myEntries'] = JSON.stringify(['someInput1']);
    // myEntries.push(someInput1);
    // localStorage['myEntries'] = JSON.stringify(myEntries);

    storeInJournal('entry', someInput1);


  });


  $("form#greatful-2").submit(function(event) {
    console.log("I'm at a cafe");
    var someInput2 = $("input#gratitude-2").val();
    console.log(someInput2);
    event.preventDefault();

    storeInJournal('entry', someInput2);
  });
});
