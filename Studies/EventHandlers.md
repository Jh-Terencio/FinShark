# Event Handlers in React

Event handlers are functions that are triggered in response to specific events like user interactions (clicking a button, submitting a form, etc.). In React, event handling is similar to how events work in the DOM, but with some key differences that align with React’s declarative approach.

## What are Event Handlers?

In React, event handlers are functions attached to elements in the component’s JSX. These handlers are used to capture and respond to events like clicks, form submissions, keystrokes, mouse movements, and more.

React normalizes events across browsers, so you can use the same API regardless of whether the user is using Chrome, Firefox, or Internet Explorer.

### React Event Handling Syntax

In React, event handlers are written in camelCase syntax (e.g., `onClick` instead of `onclick`). These handlers are passed as props to the elements.

```jsx
<button onClick={handleClick}>Click Me!</button>
```

In the example above:

`onClick` is a React event handler that listens for click events on the button.
`handleClick` is a function that will be executed when the button is clicked.