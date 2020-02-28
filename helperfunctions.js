// get the inputid the user specified

window.addEventListener('DOMContentLoaded', (event) => {
    const btns = document.querySelectorAll('.btn');

// store the original label of the dropdown menu
// how do I give each of these a unique id so the user could potentially add as many of these as they want?

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active")
    this.classList.add("active")
  });
}

$(".btn-group > .btn").click(function () {
  // same ID as above 
  document.getElementById('grouped-dropdown-button').innerHTML = 
  "OTHER <span class='caret'></span>";
});

$(".dropdown-item").click(function () {
  const value = $(this).attr("value");
  // same ID as above
  document.getElementById('grouped-dropdown-button').innerHTML = 
  value + " <span class='caret'></span>"
      var current = document.getElementsByClassName("active");
  current[0].classList.remove("active")
  this.classList.add("active")
  document.getElementById('groyped-dropdown-button').classList.add("active")
});
});