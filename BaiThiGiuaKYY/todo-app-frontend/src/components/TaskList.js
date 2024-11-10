const fs = require('fs');
const path = require('path');

// Đọc dữ liệu từ file tasks.json
const readTasksFromFile = () => {
    const data = fs.readFileSync(path.join(__dirname, '../data/tasks.json'));
    return JSON.parse(data);
};

// Ghi dữ liệu vào file tasks.json
const writeTasksToFile = (tasks) => {
    fs.writeFileSync(path.join(__dirname, '../data/tasks.json'), JSON.stringify(tasks, null, 2));
};

// Hàm model cho việc liệt kê, thêm, cập nhật và xoá task
const getAllTasks = () => readTasksFromFile();
const createTask = (task) => {
    const tasks = readTasksFromFile();
    tasks.push(task);
    writeTasksToFile(tasks);
};
const updateTask = (id, updatedTask) => {
    const tasks = readTasksFromFile();
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...updatedTask };
        writeTasksToFile(tasks);
    }
};
const deleteTask = (id) => {
    const tasks = readTasksFromFile();
    const updatedTasks = tasks.filter(task => task.id !== id);
    writeTasksToFile(updatedTasks);
};

// Hàm cập nhật trạng thái hoàn thành của task
const toggleTaskCompletion = (id) => {
    const tasks = readTasksFromFile();
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        writeTasksToFile(tasks);
    }
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    toggleTaskCompletion
};
