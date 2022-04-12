import React, { useEffect, useState } from 'react';
import AddInput from '../AddInput';
import ItemList from '../ItemList';
import Api from '../../apiService';
import './app.css';

const App = () => {
  const [todoList, setTodoList] = useState(null);
  const api = new Api("http://localhost:8000/api/todos");
  
  const getAll = () => {
    api.all().then(data => data.length && setTodoList(data));
  }
  
  useEffect( () => {
    getAll();
  }, []);
  
  const newTodo = async(inputVal) => {
    const res = await api.make({ text: inputVal});
    res && getAll();
  }

  return (
    <div id="to-do-list">
      <AddInput onItemAdd={newTodo} />
      <ItemList todos={todoList} />
    </div>
  );
}

export default App;