import React, { useState } from 'react';
import './addInput.css';
const AddInput = ({ onItemAdd }) => {
  const [input, setInput] = useState(null);
  const [err, setErr] = useState(null);

  const save = () => {
    if (!input || input.value.length <3) setErr(true);
    else {
      onItemAdd(input.value);
      setErr(null);
      input.value = "";
    }
  }

  return (
    <React.Fragment>
      {err && <div id="msg">Input length must be at least 3 symbols</div>}
      <div id="to-do-add-wrapper">
          <input type="text" id="to-do-input" onChange ={({ target }) => setInput(target) }/>
          <button id="to-do-add" onClick = { () => save()} >
            <i className="fa fa-plus"/>
          </button>
      </div>
    </React.Fragment>
  );
}

export default AddInput;