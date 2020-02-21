single_button <- function(choice, selected) {
  ifelse(choice %in% selected,
  return(tags$button(type="button", class="btn btn-grey active", value = choice, choice)),
  return(tags$button(type="button", class="btn btn-grey", value = choice , choice))
  )
}

# create a single list item to be used within menu
single_list_item <- function(choice) {
  tags$li(tags$a(
    class="dropdown-item",
    value = paste(choice),
    choice
  ))
}

groupButtonAndMenuInput <- function(input, choices, selected, menuLabel, menuChoices) {
  
  div(id = input,
      class = "groupButtonAndMenu",
      
      div(
        class="button-group btn-group",
        role="group",
        # loop through choices to get one button per choice
        # right now the order of the buttons is changed, 
        # the selected option is always first
        # how do I keep the order of choices, but just set selected to have the additional class
        # of active
        lapply(choices, single_button, selected = selected),
        
        div(
          class="maya-button-menu btn-group",
          role="group",
          
          HTML(paste0(
            "<button class='btn btn-grey dropdown-toggle'
                 type='button'
                 id='grouped-dropdown-button'
                 data-toggle='dropdown' 
                 aria-haspopup='true'
                 aria-expanded='false'>", menuLabel, " <span class='caret'></span></button>"
          )),
          
          div(
            class = "dropdown-menu",
            lapply(menuChoices, single_list_item)
          )
        )
      ),
      
      # Add the script for what happens when you add this widget here!
      htmltools::htmlDependency(
        name = "groupButtonAndMenu",
        version = "0.0.1",
        src = ".",
        script = "groupButtonAndMenu.js",
        all_files = FALSE
      )
      )
}
