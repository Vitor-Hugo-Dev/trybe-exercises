import React, { Component } from 'react';

class InputEmail extends Component {
  render() {
    const { handleChange, value } = this.props;
    console.log(`valor filho: ${value}`)
    return (
      <label htmlFor='inpEmail'>
        inpEmail:{' '}
        <input
          type='email'
          name='inpEmail'
          id='inpEmail'
          value={value}
          onChange={handleChange}
        />{' '}
      </label>
    );
  }
}
export default InputEmail;
