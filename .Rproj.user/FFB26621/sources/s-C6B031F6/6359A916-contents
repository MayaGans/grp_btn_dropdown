// Ref: https://shiny.rstudio.com/articles/building-inputs.html
// Ref: https://github.com/rstudio/shiny/blob/master/srcjs/input_binding.js

const grp_btn_and_dropdown = new Shiny.InputBinding();

$.extend(grp_btn_and_dropdown, {
  find: function(scope) {

  // this is the CSS selector that can be used to find the HTML element of your input
  // not sure what this is in my case, it's the div with the id that the user is specifying?
    return scope.querySelectorAll(".grp_btn_and_dropdown div");
  },
  getValue: function(el) {
    // For a particular input, this function is given the element containing
    // your input. In this function, find or construct the value that will be
    // returned to Shiny. The ID of `el` is used for the inputId.
    
    // e.g: return el.value
    return 'FIXME';
  },
  setValue: function(el, value) {
    // This method is used for restoring the bookmarked state of your input
    // and allows you to set the input's state without triggering reactivity.
    // Basically, reverses .getValue()

    // e.g.; el.value = value
    console.error('grp_btn_and_dropdown.setValue() is not yet defined');
  },
  receiveMessage: function(el, data) {
    // Given the input's container and data, update the input
    // and its elements to reflect the given data.
    // The messages are sent from R/Shiny via
    // R> session$sendInputMessage(inputId, data)
    console.error('grp_btn_and_dropdown.receiveMessage() is not yet defined');
    
    // If you want the update to trigger reactivity, trigger a subscribed event
    $(el).trigger("click")
  },
  subscribe: function(el, callback) {
    // Listen to events on your input element. The following block listens to
    // the change event, but you might want to listen to another event.
    // Repeat the block for each event type you want to subscribe to.
    
    $(el).on("change.grp_btn_and_dropdown", function(e) {
      // Use callback() or callback(true).
      // If using callback(true) the rate policy applies,
      // for example if you need to throttle or debounce
      // the values being sent back to the server.
      callback();
    });
  },
  getRatePolicy: function() {
    return {
      policy: 'debounce', // 'debounce', 'throttle' or 'direct' (default)
      delay: 100 // milliseconds for debounce or throttle
    };
  },
  unsubscribe: function(el) {
    $(el).off(".grp_btn_and_dropdown");
  }
});

Shiny.inputBindings.register(grp_btn_and_dropdown, 'pkgName.bindingName');