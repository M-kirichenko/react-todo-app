import React from 'react';
import Item from '../Item';
import './itemList.css';

const itemList = ({ todos, onItemChange, onItemDelete }) => {
  if (!todos.length) return 'No data';

  return (
    <ul>
      {todos.map((todo) => {
        const { id } = todo;
        return (
          <Item
            todo={todo}
            key={`todo-${id}`}
            onItemChange={onItemChange}
            onItemDelete={onItemDelete}
          />
        );
      })}
    </ul>
  );
};

export default itemList;
