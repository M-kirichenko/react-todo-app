import Item from '../Item';
import './itemList.css';

const itemList = ({ todos }) => {
  if (!todos) return "Loading...";
  
  return <ul>
  {
    todos.map( (todo, index) => <Item todo={todo} key={`todo-${index}`} />)
  }
  </ul>
}

export default itemList;