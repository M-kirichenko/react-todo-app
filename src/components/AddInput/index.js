import React, { useContext, useState } from 'react';
import DataContext from '../../dataContext';
import './addInput.css';

const AddInput = () => {
  const { api, setTodoList } = useContext(DataContext);

  const [inputVal, setInputVal] = useState('');
  const [err, setErr] = useState(null);

  const newTodo = async (text) => {
    const dataAfterCreated = await api.make({ text });
    setTodoList(dataAfterCreated);
  };

  const save = () => {
    if (!inputVal || inputVal.length < 3) {
      setErr(true);
    } else {
      newTodo(inputVal);
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

export default AddInput;
