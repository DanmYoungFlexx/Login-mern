import Task from '../models/task.model.js';

export const getTasks = async(req, res) => {
    const tasks = await Task.find({
        user: req.user.id
    }).populate('user')
    res.json(tasks);
}

export const getTask = async(req, res) => {
    const task = await Task.findById(req.params.id);
    if(!task) return res.status(404).json({ massage: 'Task not Found'});
    res.status(200).json(task);
}

export const createTask = async(req, res) => {
    const { tittle, description, date } = req.body;
    const newTask = new Task({
        tittle,
        description,
        date,
        user: req.user.id
    });
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
}

export const uptadeTask = async(req, res) => {
    const task = await Task.findByIdAndUptade(req.params.id, req.body, {
        new : true
    });
    if(!task) return res.status(404).json({ massage: 'Task not Found'});
    res.status(201).json(task);
}

export const deleteTask = async(req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task) return res.status(404).json({ massage: 'Task not Found' });
    return res.status(204);
}