const Todo = ({todo,deleteTodo,updateTodo}) => { 

    const {title, description, state, priority,id} = todo;
  
    return (
      <li className="list-group-item">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h3 className={`${state && "text-decoration-line-through"}`}>
                {title}
              </h3>
              <p className={`${state && "text-decoration-line-through"}`}>
                {description}
              </p>
  
              <div className="d-flex gap-2">
                <button onClick={()=> deleteTodo(id)} className="btn btn-sm btn-danger">Delete</button>
                <button onClick={()=> updateTodo(id)} className="btn btn-sm btn-warning">Update</button>
              </div>
              
              <span className="badge text-bg-primary">{priority && "Priorität"}</span>
            </div>
          </div>
      </li>
    );
     
  }
  export default Todo;