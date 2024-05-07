# React.js

- Components are reusable
- Pass data to components using `props`

```js
// `props` contains all the attributes passed to the component.
// Using the name `props` is a general convention.
// In this example props is a object containing:
/**
{
    title: "Components",
    description: "The core UI building block",
    image: "...",
}
**/
function CoreConcepts(props) {
  return (
    <li>
      <img src="..." alt="..." />
      <h3>TITLE</h3>
      <p>DESCRIPTION</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            // CoreConcept is a user defined component and hence they can have
            // any attributes set on those components. And those attribute names
            // are also completely up to the user.
            <CoreConcepts
              title="Components"
              description="The core UI building block"
              image={...}
            />
            <CoreConcepts />
            <CoreConcepts />
            <CoreConcepts />
          </ul>
        </section>
      </main>
    </div>
  );
}
```

- Alternative props syntax:

imorting a named export object in JavaScript

```js
// file: data.js
export const CORE_CONCEPTS = [{}]:
```

```js
// file: App.jsx
import { CORE_CONCEPT } from "./data.js";
```

- If you have a case where your `prop` names are same as the property names of object contains the data you want to set:

```js
// file: data.js
export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];
```

```js
// file: App.jsx
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}
```

- Then the above code can also be written like so:

```js
// file: App.jsx
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}
```

- Also the `CoreConcept(props)` can also be written like so:

```js
// file: App.jsx
// Using Object Destructuring
function CoreConcepts({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
```

- `children props`
  The `children prop` simply refers to the contents between you component tags.
  This is provided by react and is not a user defined prop.
  And this can simply be some text or some `jsx` code. This is called component
  composition.

```js
<TabButton>Everything between these basically is props.children</TabButton>
```

- Sending functions as values to `props`

```js
// file: TabButton.jsx
export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

// file: App.jsx
function clickHandler() {
  console.log("hello, click");
}
<TabButton onSelect={clickHandler}>Components</TabButton>;
```
