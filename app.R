library(shiny)
library(shinyjs)

source("R/groupButtonAndMenuInput.R")

css <- ".btn-grey {
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: white;
  cursor: pointer;
  font-size: 18px;
}

.active.btn-grey, .btn-grey:hover {
  background-color: #666;
  color: white;
}
"

ui <- fluidPage(
    
    inlineCSS(css),

    sidebarLayout(
        sidebarPanel(
            
            verbatimTextOutput("debug"),
            # this should really be named btnAndMenuOutput to align with Shiny conventions
            groupButtonAndMenuInput("test", choices = c("A", "B", "C"), selected = "A", menuLabel = "OTHER", menuChoices = c("1", "2", "3")),
            tags$script(src="script.js")
        ),
        
        mainPanel(
        )
    )
)

# Define server logic required to draw a histogram
server <- function(input, output) {
    # output$debug <- renderText(input$test)
}

# Run the application 
shinyApp(ui = ui, server = server)
