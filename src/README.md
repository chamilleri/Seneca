## Design clarifications:

- What is the initial state? -> solution in assumptions
- What does the shaded toggle version represent? -> implementing flat version as in most of the figma design
- When to show which background color stops and not all options as in the video are present. -> solution in assumptions
- What to do with text over 3 lines? -> increases toggle height
- Should there be mixed toggle versions? -> solution in assumptions
- Toggle border and selected background color vs transparency -> opted for transparency to work seamlessly on all background colors

## Assumptions:

- Initial state will have no options selected and the background will be grey
- Background color indicators most bad to good: red -> orange -> yellow -> blue
- Only one toggle type will be shown at once (either horizontal or vertical)

## Limitations:

- Multiple questions done as a flat list with 1 question per page (with snap scrolling) - this can be limiting on smaller screens.
