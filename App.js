import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// ReactElement
const jsxHeading = <h1 id="heading">jsx heading</h1>;

// ReactComponent
const ReactComponent = () => (
  <div className="container">
    <h1>ReactComponent</h1>
  </div>
);

// ReactComponent composition

const Heading = () => <h1 id="heading">jsx heading</h1>;

const ReactComposition = () => (
  <div className="container">
    <Heading />
    <h1>ReactComponent</h1>
  </div>
);
const root = createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<ReactComposition />);
