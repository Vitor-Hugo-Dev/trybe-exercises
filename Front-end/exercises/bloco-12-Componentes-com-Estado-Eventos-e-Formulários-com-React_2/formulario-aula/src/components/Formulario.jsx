import React, { Component } from 'react';
import InputEmail from './InputEmail';
import TextArea from './TextArea';

class Formulario extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      select: 'opt1',
      inputText: '',
      inpEmail: '',
      textArea: '',
      check: false,
      fileInput: '',
      formsError: false,
    };
  }

  handleChange(event) {
    const { name } = event.target;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    this.setState({
      [name]: value,
    });
    console.log(`valor pai: ${event.target.value}`);
  }

  render() {
    return (
      <form action='' method='get'>
        <fieldset>
          <legend>My Form</legend>
          <label htmlFor='sel'>Select: </label>
          <select
            name='select'
            id='sel'
            onChange={this.handleChange}
            value={this.state.select}
          >
            <option value='opt1'>opt1</option>
            <option value='opt2'>opt2</option>
          </select>
          <br />
          <label htmlFor='inputText'>inputText: </label>
          <input
            name='inputText'
            type='text'
            id='inputText'
            onChange={this.handleChange}
            value={this.state.inputText}
          />
          <br />
          <InputEmail
            value={this.state.inpEmail}
            handleChange={this.handleChange}
          />
          <br />
          <TextArea
            value={this.state.textArea}
            handleChange={this.handleChange}
          />
          <br />
          <label htmlFor='check'>Li e concordo com todos os termos: </label>
          <input
            type='checkbox'
            name='check'
            id='check'
            value={this.state.check}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor='fileInput'>arquivo: </label>
          <input
            type='file'
            name='fileInput'
            id='fileInput'
            onChange={this.handleChange}
            value={this.state.fileInput}
          />
        </fieldset>
      </form>
    );
  }
}
export default Formulario;
