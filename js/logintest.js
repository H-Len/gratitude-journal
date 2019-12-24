


$(document).ready(function() {
  //create click handler
  $("#loginButton").click(function() {
    console.log('button clicked');
    localStorage.setItem('pie', 'cranberry');
    $("#loginButton").hide();
    $("#logoutButton").show();

  });

  $('#logoutButton').click(function() {
    console.log('goodbye');
    console.log(localStorage.getItem('pie'));
    localStorage.removeItem('pie');
    $("#logoutButton").hide();
    $("#loginButton").show();

  });


  //logged in?
  //get localStorage and check if it's a valid login
    let password = localStorage.getItem('pie');
    console.log(password);
    if(password === 'cranberry') {
      //if answer is valid, hide login and show main page/app
      $("#loginButton").hide();

    } else {
      //if not valid login, login form remains on screen
      $("#logoutButton").hide();

    }

});
