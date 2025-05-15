/*1) Libraries (e.g., jQuery) offer focused tools for specific tasks like DOM manipulation and are flexible, giving developers more control.

2) Frameworks (e.g., Angular, Remix, Next.js) provide structured architecture and enforce rules for building entire applications.

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
}

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
*/