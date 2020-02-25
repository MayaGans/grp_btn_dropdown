library(shiny)
library(shinyjs)

source("R/groupButtonAndMenuInput.R")

ui <- fluidPage(
  
  # need to use a style sheet to set the active button color to grey
  # and hover color to grey
  # is there a way to add a style sheet to the js so it comes with the button?
  tags$link(rel = "stylesheet", type = "text/css", href = "styles.css"),

    sidebarLayout(
        sidebarPanel(
            groupButtonAndMenuInput("test", choices = c("NONE", "TRT01P", "SEX", "RACE"), selected = "NONE", menuLabel = "OTHER", menuChoices = c("D", "E", "F")),
            verbatimTextOutput("debug")
        ),
        
        mainPanel(
        )
    )
)

# Define server logic required to draw a histogram
server <- function(input, output) {
    output$debug <- renderText(input$test)
}

# Run the application 
shinyApp(ui = ui, server = server)
