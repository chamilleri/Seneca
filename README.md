# Seneca Tech Task

## Design clarifications:

- What is the initial state? -> solution in assumptions
- What does the shaded toggle version represent? -> implementing flat version as in most of the figma design
- When to show which background color stops and not all options as in the video are present. -> solution in assumptions
- What to do with text over 3 lines? -> increases toggle height
- Should there be mixed toggle versions? -> solution in assumptions
- Toggle border and selected background color vs transparency -> opted for transparency to work seamlessly on all background colors

## Assumptions:

- Initial state will have no options selected and the background will be grey.
- Background color indicators most bad to good: red -> orange -> yellow -> blue
- Only one toggle type will be shown at once (either horizontal or vertical).
- Vertical toggle shown in the mobile (320px) breakpoint.

## Limitations:

- Having multiple options (>3) on a horizontal toggle, you run into to problem of not having enough space to fit all them all.
- Since multiple questions are presented as a flat list with 1 question per page (with snap scrolling) - this can be limiting on smaller screens where part of the question is cut off.
- Background gradient animation is not possible in safari (known limitation). The options were to either remove the gradient to be able to transition between colors or to leave the gradient and have instant switches. I decided to leave the gradient to demonstrate it in Chrome.
