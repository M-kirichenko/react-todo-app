import './itemList.css';
const itemList = ({todos}) => {
  if(todos === null) return "Loading...";
  const todosList = todos.map( (item, index) =>{
    return (
      <li key={index}>
        <div className="edit-delete">
          <span className="edit-icon"><i className="fa fa-edit"></i></span>
          <span className="delete-icon"><i className="fa fa-trash-o"></i></span>
        </div>
        <input defaultValue={item.text} className="to-do-text" disabled={true}/>
          <div className="done">
            <span className="undo-icon">
              <i className="fa fa-undo" aria-hidden="true"></i>
            </span>
            <span className="check-isCheck">
              <i className="fa fa-check-circle"></i>
            </span>
          </div>
      </li>
    )
  })
  return (
    <ul>
      {todosList}
    </ul>
  );
}

export default itemList;