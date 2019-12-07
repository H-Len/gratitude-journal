var from = 0, step = 5;

function showNext(list) {
  list
  .find('li').hide().end()
  .find('li:lt(' + (from + step) + '):not(li:lt(' + from + '))')
  .show();
  from += step;
}

function showPrevious(list) {
  if(from <= 0) {
    from = list.length();
  }
  from -= step;
  list
  .find('li').hide().end()
  .find('li:lt(' + from + '):not(li:lt(' + (from - step) + '))')
  .show();
}

function retrieveJournal() {
  var myEntries = JSON.parse(localStorage['myEntries']);
  console.log(typeof myEntries);
  var entryList = String(myEntries);
  console.log(typeof entryList);
  let entryItem = entryList.split(',');
  console.log(entryItem);
  for(i=0; i < entryItem.length; i++) {
    $('.prevSubmissions').append('<li>' + entryItem[i] + '</li>');
  }
}




$(document).ready(function() {
  $(".prevSubmissions").append(function() {
    var myEntries = JSON.parse(localStorage['myEntries']);
    console.log(typeof myEntries);
    var entryList = String(myEntries);
    console.log(typeof entryList);
    let entryItem = entryList.split(',');
    console.log(entryItem);
    for(i=0; i < entryItem.length; i++) {
      $('.prevSubmissions').append('<li>' + entryItem[i] + '</li>');
    }
  // retrieveJournal();
  // $('.prevSubmissions').booklet({
  //   arrows: true
  // });

  // show initial set
  showNext($('li'));

  // clicking on the 'more' link:
  $('#next').click(function(e) {
    e.preventDefault();
    showNext($('li'));
  });

  // clicking on the 'previous' link:
  $('#previous').click(function(e) {
    e.preventDefault();
    showPrevious($('li'));
  });

  });

  // $(function() {
	// //single book
	// $('#mybook').booklet();
  //
	// //multiple books with ID's
	// $('#mybook1, #mybook2').booklet();
  //
	// //multiple books with a class
	// $('.mycustombooks').booklet();
  // });
  //
  // //init
  // $(".selector").booklet({ width: 500 });
  //
  // //getter
  // var width = $(".selector").booklet("option", "width");
  //
  // //setter
  // $(".selector").booklet("option", "width", 600);

});
