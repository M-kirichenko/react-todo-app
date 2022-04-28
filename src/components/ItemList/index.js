import React, { useContext } from 'react';
import Item from '../Item';
import './itemList.css';
import DataContext from '../../dataContext';

const ItemList = () => {
  const data = useContext(DataContext);

  if (!data.todoList.length) return 'No data';

  return (
    <ul>
      {data.todoList.map((todo) => (
        <Item todo={todo} key={`todo-${todo.id}`} />
      ))}
    </ul>
  );
};

export default ItemList;
