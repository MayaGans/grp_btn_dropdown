# create a single button to be used within groups
single_button <- function(choice) {
  tags$button(type="button", class="btn btn-grey", value = choice , choice)
}

# create a single list item to be used within menu
single_button_selected <- function(choice) {
  tags$button(type="button", class="btn btn-grey active", value = choice, choice)
}

single_list_item <- function(choice) {
  tags$li(tags$a(
    class="dropdown-item",
    value = paste(choice),
    choice
  ))
}


radio_and_dropdown <- function(input, choices, selected, menuLabel, menuChoices) {
  
  choices <- choices[!choices %in% selected]
  
  div(id = input,
      
      div(
        class="button-group btn-group",
        role="group",
        # loop through choices to get one button per choice
        single_button_selected(selected),
        lapply(choices, single_button),
        
        div(
          class="maya-button-menu btn-group",
          role="group",
          
          HTML(paste0(
            "<button class='btn btn-grey dropdown-toggle'
                 type='button'
                 data-toggle='dropdown' 
                 aria-haspopup='true'
                 aria-expanded='false'>", menuLabel, " <span class='caret'></span></button>"
          )),
          
          div(
            class = "dropdown-menu",
            lapply(menuChoices, single_list_item)
          )
        )
      ))
}