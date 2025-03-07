import UserClassy from "./UserClassy";
import React from "react";
import UserContext from "../utils/userContext";

// const About = () => {
// return (
//   <div>
//     <h1>this is about page</h1>
//     <UserClassy name={"julia from classy"} />
//   </div>
// );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "parent",
    };
    // console.log(this.state.name + "constructor");
  }

  componentDidMount() {
    // console.log(this.state.name + "component did mount");
  }

  render() {
    return (
      <div>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <h1>this is about page</h1>
        <UserClassy name={"first child"} />
        <UserClassy name={"second child"} />
      </div>
    );
  }
}
export default About;
