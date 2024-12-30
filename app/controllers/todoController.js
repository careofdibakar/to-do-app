const Todo = require('../models/todo.model');

// Create a new Todo
const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTodo = new Todo({
            title,
            description,
        });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: 'Error creating Todo', error: err });
    }
};

// Get all Todos
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(400).json({ message: 'Error fetching Todos', error: err });
    }
};

// Get a specific Todo by ID
const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    } catch (err) {
        res.status(400).json({ message: 'Error fetching Todo', error: err });
    }
};

// Update a Todo
const updateTodo = async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            { title, description, completed },
            { new: true }
        );
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    } catch (err) {
        res.status(400).json({ message: 'Error updating Todo', error: err });
    }
};

// Delete a Todo
const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Error deleting Todo', error: err });
    }
};

module.exports = {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo
};
