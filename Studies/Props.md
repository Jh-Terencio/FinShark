# Props in React

Props (short for "properties") are a mechanism in React for passing data from one component to another. They allow components to be dynamic and flexible by making them customizable and reusable.

## What are Props?

Props are read-only, immutable objects that are passed from a parent component to a child component. These props can contain any type of data, such as strings, numbers, objects, functions, or even other components. They are used to provide configuration and data to the child components, enabling the components to behave in different ways depending on the props they receive.

Props are the primary way to pass data down the component tree in React, making components more modular and reusable.

## Key Characteristics of Props

- **Read-Only**: Props cannot be modified by the component that receives them. A component is only responsible for using the data passed via props. If you need to modify the data, it should be done in the parent component’s state.
  
- **Passed from Parent to Child**: Props are passed down from a parent component to a child component. A child cannot send props back up to its parent directly, but it can send events or call functions passed as props to notify the parent.

- **Customizable**: Since props can contain dynamic data, you can pass different values to the same component, making it flexible and reusable in different contexts.

## Using Props in React

In React, props are accessed in a functional or class-based component via `props` object (for functional components, `props` is an argument passed to the function). For example:

### Passing Props from Parent to Child

```javascript
import React from 'react';

// Child Component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Parent Component
function App() {
  return <Greeting name="Alice" />;
}

export default App;
