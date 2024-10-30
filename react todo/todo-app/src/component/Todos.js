import './styles/Todos.css';
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";


function Todos(props) {

      const handleUpdate = async () => {
            const currentTime = new Date().toLocaleString();
            const updatedData = {
                  title: props.todoData.title,
                  description: props.todoData.description,
                  updatedAt: currentTime,
                  completed: true
            };
            try {
                  const response = await axios.put(`http://localhost:3000/todos/${props.todoData.id}`, updatedData);
                  alert("Updated: " + updatedData.title);
            } catch (error) {
                  alert("Error updating todo.");
            }
      };

      const handleDelete = async () => {
            try {
                  await axios.delete(`http://localhost:3000/todos/${props.todoData.id}`);
                  alert("Todo deleted.");
                  props.onDelete(props.todoData.id);
            } catch (err) {
                  alert("Error deleting todo.");
            }
      };

      return (
            <div className="todo">
                  <div className="todo-description">
                        <h1>{props.todoData.title}</h1>
                        <p>{props.todoData.description}</p>
                  </div>
                  <div className="todo-action">
                        <AiOutlineDelete className="delete-btn" onClick={handleDelete} />
                        <FaCheck className="complete-btn" onClick={handleUpdate} />
                  </div>
            </div>
      );
}

export default Todos;