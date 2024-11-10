// Dữ liệu giả (mock data)
let tasks = [
    { id: 1, title: "Chơi đá bóng", description: "Đi chơi cầu lông với nhóm vào sáng mai.", completed: false },
    { id: 2, title: "Chơi cầu lông", description: "Đi chơi cầu lông với nhóm vào chiều mai.", completed: true },
    { id: 3, title: "Chơi bóng bàn", description: "Đi chơi bóng bàn với nhóm vào tối nay.", completed: false },
    { id: 4, title: "Chơi tennis", description: "Chơi tennis với đối tác vào cuối tuần.", completed: true },
    { id: 5, title: "Chạy bộ", description: "Chạy bộ mỗi sáng để rèn luyện sức khỏe.", completed: false }
  ];
  
  // Lấy tất cả tasks
  exports.getTasks = (req, res) => {
    res.status(200).json(tasks);
  };
  
  // Lấy một task theo id
  exports.getTaskById = (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  };
  
  // Thêm một task mới
  exports.createTask = (req, res) => {
    const { title, description, completed } = req.body;
    const newTask = { 
      id: tasks.length + 1, 
      title, 
      description, 
      completed: completed || false 
    };
    
    tasks.push(newTask);
    res.status(201).json(newTask);
  };
  
  // Cập nhật một task theo id
  exports.updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description, completed } = req.body;
    
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex !== -1) {
      tasks[taskIndex] = { id: taskId, title, description, completed };
      res.status(200).json(tasks[taskIndex]);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  };
  
  // Xóa một task theo id
  exports.deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  };
  