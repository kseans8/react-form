import React from 'react';

const Email = (props) => {
  return(
    <div>
      <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={props.content}
          onChange={props.handleChange}
        />
    </div>
  )
}

export default Email;
