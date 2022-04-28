/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../../dataContext';
import './item.css';

const Item = ({ todo }) => {
  const { api, setTodoList } = useContext(DataContext);

  const updateItem = async (id, fieldsObj) => {
    const dataAfterUpdated = await api.update(id, { ...fieldsObj });
    setTodoList(dataAfterUpdated);
  };

  const deleteItem = async (id) => {
    const dataAfterDeleted = await api.delete(id);
    setTodoList(dataAfterDeleted);
  };

  const { id, text, isCheck } = todo;
  return (
    <li>
      <div className="edit-delete">
        {!isCheck && (
          <Link className="edit-icon" to={`/${id}`}>
            <i className="fa fa-edit" />
          </Link>
        )}
        <span
          className="delete-icon"
          onClick={() => deleteItem(id)}
          aria-hidden="true"
        >
          <i className="fa fa-trash-o" />
        </span>
      </div>
      <span className={`to-do-text ${isCheck && 'to-do-done'}`}>{text}</span>
      <div className="done">
        <input
          type="checkbox"
          className="done-check"
          defaultChecked={isCheck}
          onChange={({ target }) => updateItem(id, { isCheck: target.checked })}
        />
      </div>
    </li>
  );
};

export default Item;
