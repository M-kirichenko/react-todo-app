import React from 'react';
import './item.css';

const item = ({ todo, onItemChange, onItemDelete }) => {
  const { id, text, isCheck } = todo;
  return (
    <li>
      <div className="edit-delete">
        <span className="edit-icon">
          <i className="fa fa-edit" />
        </span>
        <span
          className="delete-icon"
          onClick={() => onItemDelete(id)}
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
            onItemChange(id, { isCheck: target.checked })
          }
        />
      </div>
    </li>
  );
};

export default item;
