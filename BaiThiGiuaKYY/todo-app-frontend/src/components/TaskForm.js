import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onAddTask }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/tasks', { name, description })
            .then(response => onAddTask(response.data))
            .catch(error => console.error('Error adding task:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Task Name"
                required
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task Description"
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
