import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import axios from 'axios';

const App = () => {
    const [tasks, setTasks] = useState([]);

    // Hàm để lấy danh sách task từ API backend
    useEffect(() => {
        axios.get('http://localhost:5000/api/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    // Hàm để thêm task mới vào danh sách
    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <h1>Todo App</h1>

            {/* Form thêm task mới */}
            <TaskForm onAddTask={handleAddTask} />

            {/* Hiển thị danh sách task */}
            <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
    );
};

export default App;
