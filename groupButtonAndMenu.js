// Ref: https://shiny.rstudio.com/articles/building-inputs.html
// Ref: https://github.com/rstudio/shiny/blob/master/srcjs/input_binding.js

console.log("If this prints, groupButtonAndMenuInput.R and groupButtonAndMenu.js are talking!")

const groupButtonAndMenu = new Shiny.InputBinding();

$.extend(groupButtonAndMenu, {
  find: function(scope) {
    return scope.querySelectorAll(".groupButtonAndMenu");
  },

  getValue: function(el) {
    
    // For a particular input, this function is given the element containing
    // your input. In this function, find or construct the value that will be
    // returned to Shiny. The ID of `el` is used for the inputId.
    
    const btns = $(el).querySelectorAll('.btn');
    
    // this is where I think I'm supposed to put the code I wrote for Shiny.setInputValue
    // Do I just return the value here instead of using that function?
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      // Set results to value, unless it's other
      // then set to the value of the selected dropdown
      if($(this).attr("value")){
      // user specified inputID not hard coded
        return $(this).attr("value")
      }
    });
    }
    
    $(".dropdown-item").click(function () {
        const value = $(this).attr("value");
        // same ID as above
        document.getElementById('grouped-dropdown-button').innerHTML = 
        value + " <span class='caret'></span>"
        // again needs to be user specified
        return value
      });
  },
  setValue: function(el, value) {
    // This method is used for restoring the bookmarked state of your input
    // and allows you to set the input's state without triggering reactivity.
    // Basically, reverses .getValue()

    // e.g.; el.value = value
    console.error('groupButtonAndMenu.setValue() is not yet defined');
  },
  receiveMessage: function(el, data) {
    // Given the input's container and data, update the input
    // and its elements to reflect the given data.
    // The messages are sent from R/Shiny via
    // R> session$sendInputMessage(inputId, data)
    console.error('groupButtonAndMenu.receiveMessage() is not yet defined');
    
    // If you want the update to trigger reactivity, trigger a subscribed event
    $(el).trigger("click")
  },
  subscribe: function(el, callback) {
    // Listen to events on your input element. The following block listens to
    // the change event, but you might want to listen to another event.
    // Repeat the block for each event type you want to subscribe to.
    
    $(el).on("change.groupButtonAndMenu", function(e) {
      // Use callback() or callback(true).
      // If using callback(true) the rate policy applies,
      // for example if you need to throttle or debounce
      // the values being sent back to the server.
      
      // change the name of the dropdown menu back to menuLabel if other button selected
      // is this even where this code goes?
      $(".btn-group > .btn").click(function () {
        document.getElementById('grouped-dropdown-button').innerHTML = 
        "OTHER <span class='caret'></span>";
      });
      
    });
    
  },
  getRatePolicy: function() {
    return {
      policy: 'debounce', // 'debounce', 'throttle' or 'direct' (default)
      delay: 100 // milliseconds for debounce or throttle
    };
  },
  unsubscribe: function(el) {
    $(el).off(".groupButtonAndMenu");
  }
});

Shiny.inputBindings.register(groupButtonAndMenu, 'mayasInputs.groupButtonAndMenu');