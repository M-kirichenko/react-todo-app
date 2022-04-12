import './item.css';

const item = ({ todo }) => {
  return (
    <li>
      <div className="edit-delete">
        <span className="edit-icon"><i className="fa fa-edit"/></span>
        <span className="delete-icon"><i className="fa fa-trash-o"/></span>
      </div>
      <span className="to-do-text">{todo.text}</span>
        <div className="done">
          <input type="checkbox" className="done-check"/>
        </div>
    </li>
  )
}

export default item;