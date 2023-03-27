import { useState } from "react";
import Swal from 'sweetalert2';


const Formular = ({addTodo}) => {

  const [todo, setTodo] = useState({
        title: "Todo #01",
        description: "Descripción #01",
        state: "pendiente",
        priority: true,
    });
    const { title, description, state, priority } = todo;

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!title.trim()|| !description.trim()){
            return Swal.fire({
                title: "Error!",
                text: "Titel und description sind erforderlich",
                icon: "error",
            });
        }
        addTodo({
            id: Date.now(),
            ...todo,
            state: state === "complet" ? true : false
        });
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Todo add",
            showConfirmButton: false,
            timer: 1500,
        });
    }

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;

        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Eingeben Todo"
          className="form-control mb-2"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Eingeben description"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <div className="form-check mb-2">
          <input
            type="checkbox"
            name="priority"
            className="form-check-input"
            id="inputCheck"
            checked={priority}
            onChange={handleChange}
          />
          <label htmlFor="inputCheck">Priorität geben</label>
        </div>
        <select
          className="form-select mb-2"
          name="state"
          value={state}
          onChange={handleChange}>
          <option value="pendiente">unerledigt</option>
          <option value="complet">Erledig</option>
        </select>
        
        <button type="submit" className="btn btn-primary">
          Agregar Todo
        </button>
      </form>
    );
}
export default Formular;