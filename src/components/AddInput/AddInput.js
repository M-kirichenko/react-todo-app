import React from 'react';
import './addInput.css'
const AddInput = ({onItemAdd}) => {

  const textInput = React.createRef();
  const {current} = textInput; 

  return (
    <React.Fragment>
      <div id="msg"></div>
      <div id="to-do-add-wrapper">
          <input type="text" id="to-do-input" required ref = {textInput}/>
          <button id="to-do-add" onClick = { () => onItemAdd(textInput.current.value, textInput.current) }><i className="fa fa-plus"></i></button>
      </div>
    </React.Fragment>
  );
}

export default AddInput;