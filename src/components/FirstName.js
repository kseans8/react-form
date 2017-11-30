import React from 'react';

const FirstName = (props) => {
  return(
    <div >
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="first-name"
        name="firstName"
        value={props.content}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default FirstName;
