import React from 'react';

const Address = (props) => {
  return(
    <div>
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={props.content}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default Address;
