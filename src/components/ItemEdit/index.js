/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Api from '../../apiService';
import './itemEdit.css';

let prevValue;
const ItemEdit = () => {
  const [inputText, setInputText] = useState('');
  const [msg, setMsg] = useState(null);
  const api = new Api();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.getOne(id).then((data) => {
      prevValue = data.text;
      setInputText(data.text);
    });
  }, []);

  const updateItemText = async (itemId, newText) => {
    if (!inputText.trim().length) setMsg("input text can't be emty!");
    else if (inputText === prevValue) {
      navigate('/');
    } else {
      const updated = await api.update(itemId, { text: newText });
      if (updated) navigate('/');
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
