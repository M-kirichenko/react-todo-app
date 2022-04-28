import React, { useContext } from 'react';
import Item from '../Item';
import './itemList.css';
import DataContext from '../../dataContext';

const ItemList = () => {
  const { todoList } = useContext(DataContext);

  if (!todoList.length) return 'No data';

  return (
    <ul>
      {todoList.map((todo) => (
        <Item todo={todo} key={`todo-${todo.id}`} />
      ))}
    </ul>
  );
};

export default ItemList;
