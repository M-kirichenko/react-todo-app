import React, { useEffect, useState } from 'react';
import AddInput from '../AddInput';
import ItemList from '../ItemList';
import Api from '../../apiService';
import './app.css';

const App = () => {
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

  const updateItem = async (id, fieldsObj) => {
    const updated = await api.update(id, { ...fieldsObj });
    if (updated) getAll();
  };

  const deleteItem = async (id) => {
    const deleted = await api.delete(id);
    if (deleted) getAll();
  };

  return (
    <div id="to-do-list">
      <AddInput onItemAdd={newTodo} />
      <ItemList
        todos={todoList}
        onItemChange={updateItem}
        onItemDelete={deleteItem}
      />
    </div>
  );
};

export default App;
