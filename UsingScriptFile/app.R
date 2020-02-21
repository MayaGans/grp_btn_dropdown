library(shiny)
library(shinyjs)

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
        )
    )
}


ui <- fluidPage(
    
    # need to use a style sheet to set the active button color to grey
    # and hover color to grey
    # is there a way to add a style sheet to the js so it comes with the button?
    tags$link(rel = "stylesheet", type = "text/css", href = "styles.css"),
    
    sidebarLayout(
        sidebarPanel(
            groupButtonAndMenuInput("test", choices = c("A", "B", "C"), selected = "C", menuLabel = "OTHER", menuChoices = c("D", "E", "F")),
            verbatimTextOutput("debug"),
            tags$script(src = "script.js")
        ),
        
        mainPanel(
        )
    )
)

# Define server logic required to draw a histogram
server <- function(input, output) {
    output$debug <- renderText(input$grp_btn_and_dropdown)
}

# Run the application 
shinyApp(ui = ui, server = server)
