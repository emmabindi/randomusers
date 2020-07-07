import React from "react";

class User extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <p>First Name: {this.props.firstName}</p>
        <p>Last Name: {this.props.lastName}</p>
        <p>DOB: {this.props.dob}</p>
        <p>Contact Number: {this.props.contactNumber}</p>
        <img src={this.props.profilePhoto} alt=""/>
      </>
    );
  }
}

export default User;

