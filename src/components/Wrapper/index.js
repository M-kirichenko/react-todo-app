import React, { useEffect, useState } from 'react';
import AddInput from '../AddInput';
import ItemList from '../ItemList';
import Api from '../../apiService';

const Wrapper = () => {
  const [todoList, setTodoList] = useState([]);
  const api = new Api();

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
    <>
      <AddInput onItemAdd={newTodo} />
      <ItemList
        todos={todoList}
        onItemChange={updateItem}
        onItemDelete={deleteItem}
      />
    </>
  );
};

export default Wrapper;
