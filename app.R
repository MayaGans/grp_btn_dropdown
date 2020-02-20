library(shiny)
library(shinyjs)

css <- ".btn-grey {
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: white;
  cursor: pointer;
  font-size: 18px;
}

/* Style the active class, and buttons on mouse-over */
.active, .btn-secondary:hover {
  background-color: #666;
  color: white;
}

.dropdown-item {
    width: 100%;
}"

ui <- fluidPage(
    
    inlineCSS(css),

    sidebarLayout(
        sidebarPanel(
            
            verbatimTextOutput("debug"),
            radio_and_dropdown("test", choices = c("A", "B", "C"), selected = "A", menuLabel = "OTHER", menuChoices = c("1", "2", "3")),
            tags$script(src="script.js")
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