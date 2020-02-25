// Ref: https://shiny.rstudio.com/articles/building-inputs.html
// Ref: https://github.com/rstudio/shiny/blob/master/srcjs/input_binding.js

const groupButtonAndMenu = new Shiny.InputBinding();

$.extend(groupButtonAndMenu, {
  find: function(scope) {
    // get the div containing the buttons and menu
    return scope.querySelectorAll(".group-button-and-menu");
  },
  getValue: function(el) {
    // return the active class works
    // but we need to remove the active class and add it to the clicked element
    return el.getElementsByClassName("active")[0].getAttribute("value")
  },
  setValue: function(el, value) {
    console.error('groupButtonAndMenu.setValue() is not yet defined');
  },
  receiveMessage: function(el, data) {
    // Given the input's container and data, update the input
    // and its elements to reflect the given data.
    // The messages are sent from R/Shiny via
    // R> session$sendInputMessage(inputId, data)
    console.error('groupButtonAndMenu.receiveMessage() is not yet defined');

    // If you want the update to trigger reactivity, trigger a subscribed event
    $(el).trigger("change")
  },
  subscribe: function(el, callback) {

    $(el).on("click.groupButtonAndMenu", function(e) {
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
    $(el).off(".groupButtonAndMenu");
  }
});

Shiny.inputBindings.register(groupButtonAndMenu, 'pkgName.groupButtonAndMenu');