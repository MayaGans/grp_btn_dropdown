# grp_btn_dropdown
Creating a Shiny Input Binding for Grouped Buttons + Dropdown

Currently App.R's `radio_and_dropdown` relies on [script.js](https://github.com/MayaGans/grp_btn_dropdown/blob/master/www/script.js)
where `Shiny.setInputValue` is statically set to `input$grp_btn_and_dropdown`. But at least I know the JavaScript works!

Now I want to plug the JS from `script.js` into the shiny binding template `grp_btn_and_dropdown.js`.
And eventually figure out why you don't need to call that js file within App.R. 
