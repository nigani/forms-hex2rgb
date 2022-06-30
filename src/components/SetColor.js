import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function SetColor(props) {
  const [form, setForm] = useState({
    textInput: '',
    backgroundColor: '#FFFFFF',
    label: 'Введите цвет',
  });

  const handleNameChange = (evt) => {
    evt.preventDefault();
    const textInput = evt.target.value;
    var label = 'Введите цвет';
    var backgroundColor = form.backgroundColor;
    if (textInput.length >= 7) {
      if (/^\#[a-fA-F0-9]+$/.test(textInput) && textInput.length === 7) {
        label =
          'rgb(' +
          parseInt(textInput.substr(1, 2), 16) +
          ', ' +
          parseInt(textInput.substr(3, 2), 16) +
          ', ' +
          parseInt(textInput.substr(5, 2), 16) +
          ')';
        backgroundColor = label;
      } else {
        label = 'Ошибка!';
      }
    }
    setForm((prevForm) => ({ ...prevForm, textInput, backgroundColor, label }));
  };

  return (
    <div className="box">
      <style>
        {'body { background-color: ' + form.backgroundColor + '}; }'}
      </style>
      <input
        className="inputbox"
        value={form.textInput}
        onChange={handleNameChange}
      />
      <br />
      <div className="subbox">
        <label>{form.label}</label>
      </div>
    </div>
  );
}
