import React from 'react';

const City = (props) => {
  return(
    <div>
      <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={props.content}
          onChange={props.handleChange}
        />
    </div>
  )
}

export default City;
