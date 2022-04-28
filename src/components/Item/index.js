/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './item.css';
import DataContext from '../../dataContext';

const Item = ({ todo }) => {
  const data = useContext(DataContext);

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
          onClick={() => data.deleteItem(id)}
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
          onChange={({ target }) =>
            data.updateItem(id, { isCheck: target.checked })
          }
        />
      </div>
    </li>
  );
};

export default Item;
