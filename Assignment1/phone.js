// Running each time the page is loaded
$(document).ready(function() {
  $("#Dialer").show();
  $("#ContactList").hide();
  $("#AddContact").hide();
});

// Click on Dialer Tab
$("#dialertab").click(function(){
  $("#Dialer").show();
  $("#ContactList").hide();
  $("#AddContact").hide();
});

// Click on Contact List Tab
$("#contacttab").click(function(){
  $("#ContactList").show();
  $("#Dialer").hide();
  $("#AddContact").hide();
});

// Click on Add Contact Tab
$("#addtab").click(function(){
  $("#AddContact").show();
  $("#Dialer").hide();
  $("#ContactList").hide();
});

/** References
- How to create tabs: https://www.w3schools.com/howto/howto_js_tabs.asp 
**/
