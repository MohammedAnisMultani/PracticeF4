Class-1:
Orientation + Intro to React

*What is React?
React is an efficient and flexible JavaScript library for building user interfaces 
(and React itself is written using JavaScript). 
It breaks down complex UIs into small, isolated code called “components”.

*Why React?
    1. High Performance
    2. Code reusability -->
            (u wrote code at one place and then using it again)
    3. Modular code -->
            (separating out peaces of code in diff-diff files)
            (scalable code: editing code at one place without affecting the other)


we see that we make html dynamically by
.innerHTML = ....
but this particular thing does't belongs to any datatype
so it is not a proper way to write.
The proper way is to create element within the JS eg: document.createElement('div')

Similar to this react also allow us to create elements dynamically -->
*First we need to import the CDN:
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

React.createElement(tagName, attributes, children)

 <div id="container">
        <p class="para">Para<span>Span Text</span>Text</p>
        <b>Bold Text</b>
    </div>

making the given code using react:

const root = ReactDOM.createRoot(document.getElementById('root'))

let span = React.createElement('span', null, 'Span Text')
let para = React.createElement('p', {className : 'para'}, 'para', span, 'Text')
let bold = React.createElement('b', null,'bold Text')
let container = React.createElement('div', {id : 'container'}, para, bold)

appending/render it with a element already present in a HTML:
root.render(container)

making things like this makes things clumpse.(further discussion later)

________________________________________________________

export import in react:
<script src="module.js" type="module"></script> // type set to module of the module.js

File 1: app.js
export function sumOfTwo(a,b){
    return a+b;
}

export const a = 10;

// *These exports are of 2 types
//      1. Name export
//      2. Default export

export default "anis is kingMaker"

_____________________________________

File 2: module.js
// import { sumOfTwo } from "./app";
// console.log(sumOfTwo(10,20))


// we alse can change the name of funciton after importing it
// import { sumOfTwo as sum } from "./app";

// console.log(sum(10,20))

//we can pass more then one name exports inside import
// import { sumOfTwo as sum, a } from "./app";

// import name from "./app"
// with this that default export get name as name
// also we can use it like this:
// import name, { sumOfTwo as sum, a } from "./app";

// *** Make sure the import statment always kept at the top to prevent errors ***


____________________________________________--
how to create a react file?
npx create-react-app namehere

how to open vs code through terminal?
--> add path cd _pathname_   (if any)
--> code .

how to start it in a live server?
npx react-script-start / npx react-start

.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.

Use state Introduction ( Intro, counter app)(class - 4)

1. Virtual DOM & Real DOM
2. Diffing & Reconcilation
3. React Hooks & UseState Introduction
.
.
.
.

.
.
.
.
.
.

Use state continue (object, basic form , array)(class - 5)

1. useState and its async nature
2. useState with non primitive data types ( {}, [] )
3. Assignments on useState

all about deploy using netlify & assignments'
.
.

.
.
.
.
.

Function as Props + Lazy Initilization + Movies App in Use State(class - 6)
callbacks for state updates
state uplifting & lazy intialization
movie app with filters
assignment problems

callback -> a function expression which is passed as an argument to another function


lazy initiallization: