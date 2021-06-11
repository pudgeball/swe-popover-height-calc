## `height: calc(x)` not being applied properly when displayed as an iPad popover

This demonstrates an issue with using `height: calc` CSS styles with absolute positioning.

The sample project has two divs, one colored red and one colored blue which should appear as the top and bottom half of the popover. When displayed within a tab or within the compact size UI the content is rendered correctly. When displayed as a popover on iPad the content is rendered incorrectly.

1. Opening the popover on iPad OS will display the content rendered incorrectly with #top-half being rendered with 0 height
1. Tapping on the "Open this popover as a tab" link will open the popup into a new tab and will render correctly with #top-half getting ~50% height
1. Move Safari to be in the 1/3 split view variant causing the popover to be displayed within the overflow menu. When displayed within the overflow menu, #top-half will be rendered at ~50% height

![Gif of the bug in action](./sample.gif)
