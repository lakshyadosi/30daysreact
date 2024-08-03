/*
1. Create h1 tag

const heading = React.createElement("h1",{id: "heading"}, "Hello world from react");
console.log(heading); // plain js object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); 


*/
{/* <div id="parent">
    <div id="child">
        <h1>Hello</h1>
    </div>
</div> */}
const subChild = [React.createElement("h1",{}, "Hello "),React.createElement("h1",{}, "Bro")] ;
const child = React.createElement("div",{id: "child"}, subChild);

const parent = React.createElement("div",{id: "parent"}, child); // its an object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // converts object into html
