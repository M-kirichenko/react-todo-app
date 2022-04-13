import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './addInput.css';

const AddInput = ({ onItemAdd }) => {
  const [inputVal, setInputVal] = useState('');
  const [err, setErr] = useState(null);

  const save = () => {
    if (!inputVal || inputVal.length < 3) {
      setErr(true);
    } else {
      onItemAdd(inputVal);
      setErr(null);
      setInputVal('');
    }
  };

  return (
    <>
      {err && <div id="msg">Input length must be at least 3 symbols</div>}
      <div id="to-do-add-wrapper">
        <input
          type="text"
          id="to-do-input"
          value={inputVal}
          onChange={({ target }) => setInputVal(target.value)}
        />
        <button type="button" id="to-do-add" onClick={save}>
          <i className="fa fa-plus" />
        </button>
      </div>
    </>
  );
};

AddInput.defaultProps = {
  onItemAdd: false,
};

AddInput.propTypes = {
  onItemAdd: PropTypes.func,
};

export default AddInput;
