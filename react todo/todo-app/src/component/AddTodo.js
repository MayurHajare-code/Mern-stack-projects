import axios from "axios";
import { useState } from "react";
import './styles/AddTodo.css'
import { FaS } from "react-icons/fa6";


function AddTodo() {
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const [titleError, setTitleError] = useState('');
      const [descriptionError, setDescriptionError] = useState('');

      const addTodo = async (e) => {
            e.preventDefault();
            let hasError = false;

            setTitleError('');
            setDescriptionError('');

            if (!title) {
                  setTitleError('Title is required.');
                  hasError = true;
            }
            if (!description) {
                  setDescriptionError('Description is required.');
                  hasError = true;
            }

            if (hasError) return;

            try {
                  await axios.post("http://localhost:3000/todos", {
                        title,
                        description,
                        time: '',
                        completed: false
                  });
                  alert("Your todo was successfully added.");
                  setTitle('');
                  setDescription('');
            } catch (err) {
                  console.error(`Error adding todo: ${err}`);
            }
      };

      return (
            <div className="add-todo">
                  <form onSubmit={addTodo}>
                  <div className="form-controls">
                    <label>Title</label>
                    <br />
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter todo title"
                        className={`input ${titleError ? 'input-error' : ''}`}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {titleError && <div className="error">{titleError}</div>}
                </div>
                <div className="form-controls">
                    <label>Description</label>
                    <br />
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter todo description"
                        className={`input ${descriptionError ? 'input-error' : ''}`}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {descriptionError && <div className="error">{descriptionError}</div>}
                </div>

                <div className="form-controls">
                    <input type="submit" value="Add" className="btn" />
                </div>
                  </form>
            </div>
      );
}

export default AddTodo;