import React, { useEffect, useState } from 'react';
import AddInput from '../AddInput';
import ItemList from '../ItemList';
import Api from '../../apiService';
import './app.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const api = new Api('http://localhost:8000/api/todos');

  const getAll = () => {
    api.all().then((data) => setTodoList(data));
  };

  useEffect(() => {
    getAll();
  }, []);

  const newTodo = async (inputVal) => {
    const created = await api.make({ text: inputVal });
    if (created) getAll(); // res status is checked in apiService
  };

  return (
    <div id="to-do-list">
      <AddInput onItemAdd={newTodo} />
      <ItemList todos={todoList} />
    </div>
  );
}

export default App;
