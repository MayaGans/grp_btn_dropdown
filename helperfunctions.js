// get the inputid the user specified

console.log("test")

document.onclick = function(event) {
// get the inputid the user specified
const btns = document.querySelectorAll('.btn');

// store the original label of the dropdown menu
// how do I give each of these a unique id so the user could potentially add as many of these as they want?

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    // Set results to value, unless it's other
  // then set to the value of the selected dropdown
    if($(this).attr("value")){
      // user specified inputID not hard coded
        Shiny.setInputValue('grp_btn_and_dropdown', $(this).attr("value"))
    }

  });
}

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
  "OTHER <span class='caret'></span>";
});
};