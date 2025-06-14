/* 1) when creating new react app 1)Goal musthaves,nice to haves → 2.  Sketch the UI & Data shape → 3. State & Flow → 4. Components → 5. Data/Effects → 6. Scaffold → 7. Polish
1) Libraries (e.g., jQuery) offer focused tools for specific tasks like DOM manipulation and are flexible, giving developers more control.

2)Frameworks (e.g., Angular, Remix, Next.js) provide structured architecture and enforce rules for building entire applications.

3) React is a hybrid example—a UI library that's often used like a framework due to its flexibility and ecosystem.
4) SPAs provide a modern, app-like experience, but developers must address accessibility, navigation, SEO, and performance to ensure quality.
5) React is a component-based JavaScript library for building fast, dynamic web UIs. It's popular due to its reusability, efficient updates, and developer-friendly features like state handling and the virtual DOM
6) components in react like functions in js
function Greeting() {
  const name = "John";
  return <h1 className="title">Hello {name}</h1>;
}      calling <Greeting />

return (
  <>
    <h1>Hello</h1>
    <p>Nice to meet you.</p>
  </>
)
7) exporting component           importing import Cat from "./Cat";
export default Cat               import Cat from "./Cat";     <Cat />

8) Vite dramatically reduces startup and reload times npm create vite… creates new react, npm install installs from package.json,  npm run dev  starts running at http://localhost:5173/
9) What are props?  
Data passed from parent → child componentsd
How to pass?
<Child propName={value} />
function App() {
  return (
    <>
      <Greeting name="Naomi" />
      <Greeting name="Tom" />
      <Greeting name="Oliver" />
    </>
  );
}

How to receive?
In child: function Child(props) { … } or function Child({ propName }) { … }
Multiple props
<Comp a={1} b="two" c={true} />
Spread operator
<Comp {...someObject} /> expands its keys as props.
Props vs. State
Props: immutable, come from parent.
State: mutable, owned by the component itself.
10) function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}
11)function Greeting({ isLoggedIn }) {
  return (
    <h1>
      {isLoggedIn ? "Welcome back!" : "Please sign in."}
    </h1>
  );
}
12)function Notification({ message }) {
  return (
    <div>
      {message && <p>{message}</p>}
    </div>
  )
}
13)function Greeting({ isLoggedIn }) {
  let greetingMessage;
  if (isLoggedIn) {
    greetingMessage = <h1>Welcome back!</h1>;
  } else {
    greetingMessage = <h1>Please sign in.</h1>;
  }
  return <div>{greetingMessage}</div>;
}
Note: Keeps your return clean when you have multiple conditions.
14)function Status({ code }) {
  switch (code) {
    case 200:
      return <p>OK</p>;
    case 404:
      return <p>Not found</p>;
    default:
      return <p>Unknown status</p>;
  }
}
Note: Handy for more than two discrete cases.
15) Basic Array of Primitives
jsx

function FruitList() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

  return (
    <ul>
      {fruits.map((fruit, idx) => (
        <li key={fruit + '-' + idx}>{fruit}</li>
      ))}
    </ul>
  );
}
.map() loops over fruits and returns an <li> for each.

key prop (fruit + '-' + idx) must be unique among siblings.

16)Array of Objects

function UserList() {
  const users = [
    { id: 'u1', name: 'Alice', email: 'alice@example.com' },
    { id: 'u2', name: 'Bob',   email: 'bob@example.com'   },
    { id: 'u3', name: 'John',  email: 'john@example.com'  },
  ];

  return (
    <div>
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
Use each object’s stable unique ID (user.id) for key.

You can render any JSX structure inside the .map().

17)Conditional or Filtered Lists
jsx
function ActiveUsers({ users }) {
  return (
    <ul>
      {users
        .filter(u => u.isActive)
        .map(u => (
          <li key={u.id}>{u.name}</li>
        ))
      }
    </ul>
  );
}
Chain array methods before .map() to only render items that meet a condition.

18) styling:
1) Basic Usage
function Button({ text }) {
  const btnStyle = {
    backgroundColor: "#007BFF", // camelCase instead of kebab-case
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
  };

  return <button style={btnStyle}>{text}</button>;
}
The style prop accepts a JS object → keys are CSS properties in camelCase, values are strings (or numbers for unitless properties like lineHeight, flex, etc.).

2) Direct Inline Object
For just a few properties, you can inline the object literal:

function SmallButton({ text }) {
  return (
    <button
      style={{
        backgroundColor: "green",
        color: "white",
        padding: "8px 16px",
      }}
    >
      {text}
    </button>
  );
}

3)You can compute style values on the fly:
function DynamicBox({ isActive }) {
  const boxStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: isActive ? "limegreen" : "lightgray",
    transition: "background-color 0.3s ease",
  };

  return <div style={boxStyle} />;
};

4)Merging Style Objects
Combine multiple style sources with the spread operator:
const baseStyle = {
  padding: "12px",
  fontSize: "14px",
};

function MergedButton({ primary }) {
  const primaryStyle = primary
    ? { backgroundColor: "blue", color: "white" }
    : { backgroundColor: "gray", color: "black" };

  return <button style={{ ...baseStyle, ...primaryStyle }}>Click</button>;
}
Order matters: later properties override earlier ones.
19) One root: wrap siblings in <></> is fragment or a container.   camelCase props: className, htmlFor, strokeWidth, etc.
20)JSX elements directly inside a map() call always need keys!
21) to create react:  npm create vite@latest 06-recipes -- --template react
cd my-app
npm install
npm start
 22) cd "C:\Users\sadyk\OneDrive\Рабочий стол\fcc-frontend-libraries"
npm create vite@latest 06-recipes-list -- --template react
is creating tools inside of folder 
23) npx create-react-app 08-my-poem-app --yes it will also create
24) to create simpler run in Powershell npx create-react-app my-poem-app
cd my-poem-app and npm start
25) randomUUID() creates random keys should never be created on the fly
26) state is the current state of sth Initialization	this.state = {...}	const [foo, setFoo] = useState
Updating	this.setState({ foo: newVal })	setFoo(newVal)
Merging vs Replacing	Merges objects shallowly	Replaces wholesale (you merge manually)
Asynchronous nature	Updates may batch & be async	Same—treat setter calls as async
 to change we use setName()
  use const [position, setPosition] = useState({ x: 0, y: 0 }); when using all of them not seperate
  when we want to make array inside of usage we can do set([]) 
  27) for inputs     const data = Object.fromEntries(new FormData(e.target).entries());
new FormData(e.target)
e.target is the <form> element that was submitted.
new FormData(form) builds a collection of all the input values inside that form, keyed by each input’s name attribute.

28) .entries()
This returns an iterator over [key, value] pairs for every form field.
Example: [ ['name', 'Alice'], ['email', 'alice@example.com'], … ]

29) Object.fromEntries(...)
Takes those pairs and turns them into a plain JavaScript object:

30) Side-Effects need a controlled lifecycle—don’t mix them with render logic.
useEffect(callback, deps):
callback runs after render;
deps array controls when;
return a cleanup function to undo or stop side-effects.
Empty array ([]) = run once;
No array = run every render;
Non-empty array = run on mount and whenever dependencies change.
Always clean up timers, subscriptions, or listeners.
Don’t over-use effects:
Simple calculations belong in render.
UI events belong in handlers.
State sharing belongs via “lifting up” state, not via effects.
31) useEffect(() => {
  // start
  return () => {
    // stop
  };
}, [/* dependencies ]);
No deps → on every render
[] → on mount (+ dev double-run), cleanup on unmount
[a, b] → on mount, when a or b change, and on unmount

Dependencies
Include every reactive value: props, state, derived in-component variables
Omit non-reactive constants declared outside

Cleanup
Always return a function to undo timers, subscriptions, DOM listeners, etc.
Ensures you never leak old intervals or open connections.

Split up Effects
One Effect = one sync process
Prevent unintended side-effects or extra runs

Linting
Trust react-hooks/exhaustive-deps to catch missing dependencies
Don’t suppress it—refactor or move values so that dependencies are correct

32) When not use useEfffects If you can calculate something during render, you don’t need an Effect.
To cache expensive calculations, add useMemo instead of useEffect.
To reset the state of an entire component tree, pass a different key to it.
To reset a particular bit of state in response to a prop change, set it during rendering.
Code that runs because a component was displayed should be in Effects, the rest should be in events.
If you need to update the state of several components, it’s better to do it during a single event.
Whenever you try to synchronize state variables in different components, consider lifting state up.
You can fetch data with Effects, but you need to implement cleanup to avoid race conditions.  

33) const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b),
  [a, b]  runs only in change a or b
);

34) Concept:	Functional Component  ; Class Component
Props:	props.name or { name }      ; this.props.name
State:	useState()                  ;	this.state, this.setState()
Handlers: Inline or arrow functions ;	Define method + bind in constructor
JSX	Return: directly                ;	Use render() method

35)Lifecycle Phase:	Class Method ;	Functional Equivalent
Mount:	componentDidMount      ;	useEffect(..., [])
Update:	componentDidUpdate     ;	useEffect(..., [dep])
Unmount:	componentWillUnmount ;	return () => {...} inside useEffect
Render:	render()	             ;   Return JSX in function

36) 🚀 1. Create a new project with Vite + React:
bash
Копировать код
npm create vite@latest my-app -- --template react
cd my-app
npm install
OR for TypeScript:


npm create vite@latest my-app -- --template react-ts
🧪 2. Install Vitest + Testing Tools:

npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @vitejs/plugin-react
⚙️ 3. Create vite.config.js:
Make sure it looks like this:

js
Копировать код
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
🔧 4. Create src/setupTests.js:
js
Копировать код
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => cleanup());
🧪 5. Create a sample test: src/App.test.jsx
jsx
Копировать код
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App component', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
▶️ 6. Add script in package.json (already exists in Vite):
json
Копировать код
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "vitest"
}
  
37)getByRole() – Best for everything (buttons, headings, links).

getByLabelText() – Best for form inputs (associated with <label>).

getByPlaceholderText() – Use only when no label exists.

getByText() – Great for static content like paragraphs or labels.

getByDisplayValue() – Good for pre-filled form values.

Semantic Queries: getByAltText, getByTitle (less common)

getByTestId() – Use as a last resort (only when nothing else fits).

render() & screen	Setup and query your UI like a real user would

userEvent:  Makes tests simulate real interactions

toMatchSnapshot()	Useful for verifying layout, risky when overused

38)render() is creating ffake html dom

39)act() is running after sth  act(() => {
    ReactDOM.render(<App />, el);
  }); running after running dom in testing
  
40) propTypes is giving the exact propTypes in returnig not in testing 
RenderName.propTypes = {
  name: PropTypes.string.isRequired,
}bbbbbf
  b
41) useParams() lets you access dynamic values from the URL like /profile/:name

42) npm install react-router-dom to install router

43) conposes: in css to share styles 

44) create: import { createContext } from 'react';

export const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
});
  use provider:     <ShopContext.Provider value={{ cartItems, addToCart }}>
 */