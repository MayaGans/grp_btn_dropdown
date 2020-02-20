shiny_text_input <- shiny::radioButtons(
  "INPUT", "LABEL", choices = c("A", "B", "C")
)

cat(format(shiny_text_input))


radioANDdropdown <- function(inputId, label, choices = choices) {
  .label <- label
  htmltools::withTags(
    div(
      class = "class='btn-group' data-toggle='buttons",
      label(class = "control-label", `for` = inputId, .label),
      shinyWidgets::radioGroupButtons(id = inputId, class = "form-control", choices = choices)
    )
  )
}

radioANDdropdown()


shiny_text_input <- shiny::textAreaInput(
  "INPUT", "LABEL", placeholder = "PLACEHOLDER"
)

shiny_ttt <- yonder::menuInput("INPUT", "LABEL", c("A", "B", "C"))

cat(format(shiny_text_input))

typingSpeedInput <- function(inputId, label, placeholder = NULL) {
  .label <- label
  htmltools::withTags(
    div(
      class = "form-group typing-speed",
      label(class = "control-label", `for` = inputId, .label),
      textarea(id = inputId, class = "form-control", placeholder = placeholder)
    )
  )
}
