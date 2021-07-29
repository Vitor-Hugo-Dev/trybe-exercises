import React, { Component } from 'react';

class TextArea extends Component {
  render() {
      const { value, handleChange } = this.props;
    return (
      <label htmlFor='textAr'>
        textAr:{' '}
        <textarea
          name='textArea'
          id='textAr'
          cols='30'
          rows='10'
          value={value}
          onChange={handleChange}
        ></textarea>
      </label>
    );
  }
}
export default TextArea;
