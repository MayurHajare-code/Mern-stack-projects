import axios from "axios";
import React, { useEffect, useState } from "react";
import Todos from "./Todos";
import './styles/TodosList.css';

const fetchTodos = async (setTodos) => {
    try {
        const res = await axios.get("http://localhost:3000/todos");
        setTodos(res.data);
    } catch (err) {
        console.error(`Error fetching todos: ${err}`);
    }
}

function TodosList() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('notCompleted');

    useEffect(() => {
        fetchTodos(setTodos);
    }, []);

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const filteredTodos = () => {
        return todos.filter(todo => 
            filter === 'completed' ? todo.completed : !todo.completed
        );
    };

    return (
        <React.Fragment>
            <div className="todos-list">
                <div className="btn-group">
                    <button
                        className="btn"
                        onClick={() => setFilter('notCompleted')}
                    >
                        Not Completed
                    </button>
                    <button
                         className="btn"
                        onClick={() => setFilter('completed')}
                    >
                        Completed
                    </button>
                </div>
                <ul>
                    {filteredTodos().length === 0 ? (
                        <h2>No todos available....</h2>
                    ) : (
                        filteredTodos().map(todo => (
                            <li key={todo.id}>
                                <Todos todoData={todo} onDelete={handleDelete} />
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </React.Fragment>
    );
}

export default TodosList;























/*
Benefits:
Automatic Fetching: Todos are fetched when the component mounts.
Manual Refresh: Users can refresh the list at any time, ensuring they see the latest data.


import axios from "axios";
import React, { useEffect, useState } from "react";
import Todos from "./Todos";
import './styles/TodosList.css';

const fetchTodos = async (setTodos, setLoading, setError) => {
    setLoading(true);
    try {
        const res = await axios.get("http://localhost:3000/todos");
        setTodos(res.data);
    } catch (err) {
        setError(`Error fetching todos: ${err}`);
    } finally {
        setLoading(false);
    }
}

function TodosList() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('notCompleted'); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchTodos(setTodos, setLoading, setError); 
    }, []);

    const handleDelete = async (id) => {
        // Optionally, make an API call here to delete from the server
        // await axios.delete(`http://localhost:3000/todos/${id}`);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const filteredTodos = () => {
        return todos.filter(todo => 
            filter === 'completed' ? todo.completed : !todo.completed
        );
    };

    const handleRefresh = () => {
        fetchTodos(setTodos, setLoading, setError);
    };

    return (
        <React.Fragment>
            <div className="todos-list">
                <div className="btn-group">
                    <button className="btn" onClick={() => setFilter('notCompleted')}>
                        Not Completed
                    </button>
                    <button className="btn" onClick={() => setFilter('completed')}>
                        Completed
                    </button>
                    <button className="btn" onClick={handleRefresh}>
                        Refresh Todos
                    </button>
                </div>
                {loading ? (
                    <h2>Loading...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    <ul>
                        {filteredTodos().length === 0 ? (
                            <h2>No todos available....</h2>
                        ) : (
                            filteredTodos().map(todo => (
                                <li key={todo.id}>
                                    <Todos todoData={todo} onDelete={handleDelete} />
                                </li>
                            ))
                        )}
                    </ul>
                )}
            </div>
        </React.Fragment>
    );
}

export default TodosList;

*/