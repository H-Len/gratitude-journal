


$(document).ready(function() {
  //create click handler
  $("#loginButton").click(function() {
    console.log('button clicked');
    // document.cookie = "pie=pumpkin; SameSite=Strict";
    localStorage.setItem('pie', 'cranberry');
  });

  $('#logoutButton').click(function() {
    console.log('goodbye');
    console.log(localStorage.getItem('pie'));
    localStorage.removeItem('pie');
  })


  //logged in?
  //get cookie and check if it's a valid login
  //if not valid login, login form remains on screen
  //if answer is valid, hide login and show main page/app
});
