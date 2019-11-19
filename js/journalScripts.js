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
  });
});
