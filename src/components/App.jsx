import React from "react";
import "../index.css";
import User from "./User";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

class App extends React.Component {
  
  state = {customData:""};

  async componentDidMount() {
    const response = await fetch("https://randomuser.me/api/");
    const users = await response.json();
    this.setState({ users: users });
  }

  handleInput = (input) => {
    this.setState(state=>{
      return {customData: input}
    })
  }

  render() {
    const users = this.state?.users;
    if (users === undefined) {
      return <p>Please Wait....</p>;
    } else {
      const details = users.results[0];
      console.log(details);
      return (
        <>
          <h1>My Random User app</h1>
          <div>
            <User
              firstName={details.name.first}
              lastName={details.name.last}
              profilePhoto={details.picture.thumbnail}
              dob={details.dob.date}
              contactNumber={details.phone}
            />
          </div>
          <hr/>
          <div>
            <UserInput handleInput={this.handleInput} />
            <UserOutput random = {this.state.customData}/>
          </div>
        </>
      );
    }
  }
}

export default App;
