import React, { useEffect, useState } from "react";
import "../index.css";

function App() {
  const [user, setUser] = useState(null)

  const onClick = () => {
    // what do I put here to get the page to refresh upon click and show new user 
    setUser(setUser)
    console.log("clicking")
  }

  useEffect(() => {
    console.log("Inside use effect")
    async function getUserData() {
      try {
        const response = await fetch("https://randomuser.me/api/")
        const randomUser = await response.json()
        setUser(randomUser.results[0])
      } catch(err) {
        console.log(err)
      }
    }
    getUserData();
  }, [])

  return user && (
    <div>
      <h1>User info goes here</h1>
      <p>{user.email
      }</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  )
}
/*
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
} */

export default App;
