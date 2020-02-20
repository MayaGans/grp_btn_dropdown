const header = document.getElementById("test");
const btns = header.querySelectorAll('.btn');


for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    console.log();
    // Set results to value, unless it's other
  // then set to the value of the selected dropdown
    if($(this).attr("value")){
        Shiny.setInputValue('grp_btn_and_dropdown', $(this).attr("value"))
    }

  });
}

$(".dropdown-item").click(function () {
         const value = $(this).attr("value");
         Shiny.setInputValue('grp_btn_and_dropdown', value)
});