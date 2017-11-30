import React from 'react';

const PhoneNumber = (props) => {
  return(
    <div>
      <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phone-number"
          name="phone-number"
          value={props.content}
          onChange={props.handleChange}
        />
    </div>
  )
}

export default PhoneNumber;
