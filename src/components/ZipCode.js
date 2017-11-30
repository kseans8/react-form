import React from 'react';

const ZipCode = (props) => {
  return(
    <div>
      <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="text"
          id="zip-code"
          name="zip-code"
          value={props.content}
          onChange={props.handleChange}
        />
    </div>
  )
}

export default ZipCode;
