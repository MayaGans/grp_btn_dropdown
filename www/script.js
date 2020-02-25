// get the inputid the user specified

// store the original label of the dropdown menu
// how do I give each of these a unique id so the user could potentially add as many of these as they want?
originalMenuName = document.getElementById('grouped-dropdown-button').textContent

$(".dropdown-item").click(function () {
  const value = $(this).attr("value");
  // same ID as above
  document.getElementById('grouped-dropdown-button').innerHTML = 
  value + " <span class='caret'></span>"
  // again needs to be user specified
  Shiny.setInputValue('grp_btn_and_dropdown', value )
});

$(".btn-group > .btn").click(function () {
  // same ID as above
  document.getElementById('grouped-dropdown-button').innerHTML = 
  originalMenuName + " <span class='caret'></span>";
});