import React from 'react';
import './item.css';

const item = ({ todo }) => (
  <li>
    <div className="edit-delete">
      <span className="edit-icon">
        <i className="fa fa-edit" />
      </span>
      <span className="delete-icon">
        <i className="fa fa-trash-o" />
      </span>
    </div>
    <span className={`to-do-text ${todo.isCheck && 'to-do-done'}`}>
      {todo.text}
    </span>
    <div className="done">
      <input
        type="checkbox"
        className="done-check"
        defaultChecked={todo.isCheck}
      />
    </div>
  </li>
);

export default item;
