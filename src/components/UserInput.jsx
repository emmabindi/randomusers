import React from 'react';

class UserInput extends React.Component {
  
  onTextInput = (event) => {
    event.preventDefault();
    this.props.handleInput(event.target.value);
  };

  render(){
    return (
      <>
      <p> Add your message:</p>
      <input type="text" onChange={this.onTextInput}/>
      </>
    )
  }
}

export default UserInput;