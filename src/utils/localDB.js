
// save the todo in localStorage from JSON placeholder
const saveTodosToLocalDB = (key, value) => {
    const saveDB = localStorage.getItem(key);
    if (saveDB) {
        return;
    }
    else {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

// get all todos from localStorage
const getTodos = () => {
    let todosData = [];
    const todos = localStorage.getItem('todos');
    if (todos) {
        const allTodo = JSON.parse(todos);
        const sortTodos = allTodo.sort((a, b) => a.id - b.id);
        todosData = sortTodos;
    }
    return todosData;
}

// add todo in localStorage
const addTodo = (todo) => {
    const todos = getTodos();
    localStorage.setItem("todos", JSON.stringify([...todos, todo]))

}

// delete todo from localStorage
const deleteTodo = (id) => {
    const todos = getTodos();
    const newTodos = todos.filter(item => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(newTodos));
}

// update todo in localStorage
const editTodo = (todo) => {
    const todos = getTodos();
    const newTodos = todos.filter(item => item.id !== todo.id);
    localStorage.setItem("todos", JSON.stringify([...newTodos, todo]))
}

// update mark as completed 
const updateCompetedMark = (todo) => {
    const todos = getTodos();
    const newTodos = todos.filter(item => item.id !== todo.id);
    localStorage.setItem("todos", JSON.stringify([...newTodos, todo]))
}

export {
    saveTodosToLocalDB, 
    getTodos,
    addTodo,
    deleteTodo,
    editTodo,
    updateCompetedMark,

}

