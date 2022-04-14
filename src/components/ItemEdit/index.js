/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Api from '../../apiService';
import './itemEdit.css';

const ItemEdit = () => {
  const [itemText, setItem] = useState(null);
  const [inputText, setInputText] = useState(null);
  const [msg, setMsg] = useState([]);
  const api = new Api();

  const { id } = useParams();

  useEffect(() => {
    api.getOne(id).then((data) => {
      setItem(data.text);
      setInputText(data.text);
    });
  }, []);

  const updateItemText = async (itemId, newText) => {
    if (inputText === itemText) setMsg(['error', 'no changes']);
    else if (!inputText.length) setMsg(['error', "input text can't be emty!"]);
    else {
      const updated = await api.update(itemId, { text: newText });
      if (updated) {
        setMsg(['success', 'saved']);
        setItem(newText);
        setInputText(newText);
      }
    }
  };
  const undo = () => setInputText(itemText);

  if (!itemText) return 'no data';
  return (
    <>
      {msg.length && (
        <div id={msg[0] === 'success' ? 'success-msg' : 'msg'}>{msg[1]}</div>
      )}
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
