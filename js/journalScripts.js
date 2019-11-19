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

  var from = 0, step = 6;

  function showNext(list) {
    list
      .find('li').hide().end()
      .find('li:lt(' + (from + step) + '):not(li:lt(' + from + '))')
        .show();
    from += step;
  }

  function showPrevious(list) {
    from -= step;
    list
      .find('li').hide().end()
      .find('li:lt(' + from + '):not(li:lt(' + (from - step) + '))')
        .show();
  }

  // show initial set
  showNext($('ul'));

  // clicking on the 'more' link:
  $('#more').click(function(e) {
    e.preventDefault();
    showNext($('ul'));
  });

});
