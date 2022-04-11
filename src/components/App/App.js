import React, {useEffect, useState} from 'react';
import './app.css';
import AddInput from '../AddInput';
import ItemList from '../ItemList';
import Api from '../../apiService';
const App = () => {
 
  const [todoList, setTodoList] = useState(null);
  const api = new Api("http://localhost:8000/api/todos");
  
  const getAll = () =>{
    const todos = api.all();
    todos && todos.then(data => data.length && setTodoList(data));
  }
  
  useEffect( () => {
    getAll();
  }, []);
  
 
  const newTodo = async(inputVal, inputRef) => {
    const res = await api.make({text: inputVal});
    if(res) {
      getAll();
      inputRef.value = "";
    }
  }

  return (
    <div id="to-do-list">
        <AddInput onItemAdd = {newTodo}/>
        <ItemList todos={todoList}/>
    </div>
  );
}

export default App;