/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Api from '../../apiService';
import DataContext from '../../dataContext';
import './itemEdit.css';

let prevValue;
const ItemEdit = () => {
  const data = useContext(DataContext);

  const [inputText, setInputText] = useState('');
  const [msg, setMsg] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    data.api.getOne(id).then((todo) => {
      prevValue = todo.text;
      setInputText(todo.text);
    });
  }, []);

  const updateItemText = async (itemId, newText) => {
    if (!inputText.trim().length) setMsg("input text can't be emty!");
    else if (inputText === prevValue) {
      navigate('/');
    } else {
      data.updateItem(itemId, { text: newText });
      navigate('/');
    }
  };

  const undo = () => setInputText(prevValue);

  if (!inputText && !prevValue) return 'no data';
  return (
    <>
      {msg && <div id="msg">{msg}</div>}
      <input
        type="text"
        value={inputText}
        id="itemText"
        onChange={({ target }) => setInputText(target.value)}
      />
      <span
        aria-hidden="true"
        className="edit-page-icons"
        onClick={() => updateItemText(id, inputText)}
      >
        <i className="fa fa-save" />
      </span>
      <span aria-hidden="true" className="edit-page-icons" onClick={undo}>
        <i className="fa fa-undo" />
      </span>
      <Link to="/" className="edit-page-icons">
        <i className="fa fa-chevron-circle-left" />
      </Link>
    </>
  );
};

export default ItemEdit;
