const answers = {
  aria: {
    main: 'Accessibility in Web development means enabling as many people as possible to use Web sites, even when those people’s abilities are limited in some way.',
    firstPoint: 'Aria stands for Accessible Rich Internet Application',
    secondPoint: 'Semantic HTML: Use elements such as <nav>, <button>, <header>, <aside> that help clarify what part of html page someone is focused on.',
    thirdPoint: 'Alt Tags: Use on images. Be verbose. <img src="mountain.jpg" alt="The cascade mountains at sunset in January" />',
    fourthPoint: 'ARIA Roles: Define the purpose of an element. Each element can only have one ARIA role at a time',
  },
  attr: {
    main: 'data-* attributes allow us to store extra information on standard, semantic HTML elements.',
    firstPoint: `Syntax:
    	<article
      id="electriccars"
      data-columns="3"
      data-index-number="12314"
      data-parent="cars">
...
</article>`,
    firstLinkName: 'CSS Tricks: Attribute Selectors',
    firstLinkURL: 'https://css-tricks.com/almanac/selectors/a/attribute/',
    secondLinkName: 'MDN: Using Data Attributes',
    secondLinkURL: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes',
  },
  boxModel: {
    main: 'Each element is a rectangular box. CSS leverages “the box model” to control layout and design. An HTML element is comprised of its content and the margins, borders, padding surrounding it. Boxes are “stacked” in the order they appear in your HTML. You can stack them horizontally, vertically, and in the z-plane.',
    image: '../images/box-model.png',
  },
  inlineBlock: {
    main: '**Block** elements take up the full width available with a line break before and after it. `<h1>, <p>, <li>, and <div>, while  **Inline** elements one take up as much width as necessary, cannot accept width and height values and do not force line breaks. `<a>, <span>`',
    firstPoint: 'What about **inline-block** versus **inline**? They are basically the same except that inline-block elements can take a width and a height, while inline elements cannot.',
    firstLinkName: 'Stack Overflow post on inline versus inline-block',
    firstLinkURL: 'https://stackoverflow.com/questions/8969381/what-is-the-difference-between-display-inline-and-display-inline-block',
  },
  zIndex: {
    main: 'The z-index specifies the stacking order of positioned elements. Lowest z-index will be on the bottom and highest on the top',
    firstPoint: 'It can take the following values: **Auto**: Sets stack order equal to its parents; **Number**: Orders the stack order; **Initial**: Sets to default value of 0; and **Inherit**: Inherits from its parent element.',
  },
  positioning: {
    main: 'There are four types of CSS positioning detailed below:',
    firstPoint: 'Relative: A relatively positioned element preserves its space. The adjacent elements aren’t repositioned to occupy the reserved space for this element. However, the offsets of this element don’t occupy space. They’re completely ignored from the other elements, and hence that may causes elements to overlap each other.',
    secondPoint: 'Absolute: An absolutely positioned element is completely removed from the normal flow. The adjacent sibling elements occupy its space.',
    thirdPoint: 'Fixed: A fixed positioned element (subcategory of the absolute positioning) is positioned relative to the viewport. It will stick in place despite any scrolling or resizing of the viewport',
    fourthPoint: 'Static: HTML elements are positioned static by default. Static positioned elements are not affected by the top, bottom, left, and right properties.',
    firstLinkName: 'MDN Docs on CSS Positioning',
    firstLinkURL: 'https://developer.mozilla.org/en-US/docs/Web/CSS/position',
  },
}

export default answers
