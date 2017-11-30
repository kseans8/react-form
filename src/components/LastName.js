import React from 'react';

const LastName = (props) => {
  return(
    <div>
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="last-name"
        name="lastName"
        value={props.content}
        onChange={props.handleChange}
      />
    </div>
  )

}

export default LastName;
