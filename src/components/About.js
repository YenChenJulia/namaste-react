import UserClassy from "./UserClassy";
import React from "react";

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
    console.log(this.state.name + "constructor");
  }

  componentDidMount(){
    console.log(this.state.name + "component did mount");
    
  }

  render() {
    return (
      <div>
        <h1>this is about page</h1>
        <UserClassy name={"first child"} />
        <UserClassy name={"second child"} />
      </div>
    );
  }
}
export default About;
