// var from = 0, step = 5;
//
// function showNext(list) {
//   list
//   .find('li').hide().end()
//   .find('li:lt(' + (from + step) + '):not(li:lt(' + from + '))')
//   .show();
//   from += step;
// }
//
// function showPrevious(list) {
//   if(from <= 0) {
//     from = list.length();
//   }
//   from -= step;
//   list
//   .find('li').hide().end()
//   .find('li:lt(' + from + '):not(li:lt(' + (from - step) + '))')
//   .show();
// }
//
// function retrieveJournal() {
//   var myEntries = JSON.parse(localStorage['myEntries']);
//   console.log(typeof myEntries);
//   var entryList = String(myEntries);
//   console.log(typeof entryList);
//   let entryItem = entryList.split(',');
//   console.log(entryItem);
//   for(i=0; i < entryItem.length; i++) {
//     $('.prevSubmissions').append('<li>' + entryItem[i] + '</li>');
//   }
// }




$(document).ready(function() {

  $("#mybook").append(function() {
    var myEntries = JSON.parse(localStorage['myEntries']);
    // console.log(typeof myEntries);
    var entryList = String(myEntries);
    // console.log(typeof entryList);
    let entryItem = entryList.split(',');
    // console.log(entryItem);
    let pages = '<div> <ul>';
    const lperPage = 10;
    for(i = 0; i < entryItem.length; i++) {
      pages += '<li>' + entryItem[i] + '</li>';
      if(i > 0 && i % 9 === 0) {
        pages += '</ul></div><div><ul>'
        // $('#mybook').append('<li>' + entryItem[i] + '</li>');
        // $('.prevSubmissions').append('<li>' + entryItem[i] + '</li>');
        // $('.prevSubmissions').append(entryItem[i] + '\n');
      }
    }
    pages += '</ul></div>';
    entryItem = entryItem + '\n';
    return pages;
  });
  $('#mybook').booklet()

});
