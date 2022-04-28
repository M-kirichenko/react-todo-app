/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataContext from '../../dataContext';
import AddInput from '../AddInput';
import ItemList from '../ItemList';
import ItemEdit from '../ItemEdit';
import Api from '../../apiService';
import './app.css';

const api = new Api();

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const updateItem = async (id, fieldsObj) => {
    const dataAfterUpdated = await api.update(id, { ...fieldsObj });
    setTodoList(dataAfterUpdated);
  };

  const deleteItem = async (id) => {
    const dataAfterDeleted = await api.delete(id);
    setTodoList(dataAfterDeleted);
  };

  useEffect(() => {
    api.all().then((data) => setTodoList(data));
  }, []);

  return (
    <div id="to-do-list">
      <DataContext.Provider
        value={{ setTodoList, todoList, updateItem, deleteItem, api }}
      >
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <AddInput />
                  <ItemList />
                </>
              }
            />
            <Route path="/:id" exact element={<ItemEdit />} />
          </Routes>
        </Router>
      </DataContext.Provider>
    </div>
  );
};

export default App;
