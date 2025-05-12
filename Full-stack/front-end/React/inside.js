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
How to receive?
In child: function Child(props) { … } or function Child({ propName }) { … }
Multiple props
<Comp a={1} b="two" c={true} />
Spread operator
<Comp {...someObject} /> expands its keys as props.
Props vs. State
Props: immutable, come from parent.
State: mutable, owned by the component itself.*/