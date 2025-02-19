import React from "react";

class UserClassy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
    console.log(this.props.name + "constructor");
     
  }

  componentDidMount () {
    console.log(this.props.name + "component did mount");

  }
  render() {
    const { count, count2 } = this.state;
    console.log(this.props.name + "rendered");
    
    return (
      <div className="user-card">
        <h1>name: {this.props.name}</h1>
        <h3>location: Taoyuan</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          count increase
        </button>
        <h1>count: {count}</h1>
        <h1>count2: {count2}</h1>
      </div>
    );
  }
}

export default UserClassy;
