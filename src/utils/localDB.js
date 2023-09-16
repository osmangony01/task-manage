
const saveTodosToLocalDB = (key, value) => {
    const saveDB = localStorage.getItem(key);
    if (saveDB) {
        return;
    }
    else {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

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

const addTodo = (todo) => {
    const todos = getTodos();
    //todos.push(todo);
    localStorage.setItem("todos", JSON.stringify([...todos, todo]))

}

const deleteTodo = (id) => {
    const todos = getTodos();
    const newTodos = todos.filter(item => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(newTodos));

}

const editTodo = (todo) => {
    const todos = getTodos();

    const newTodos = todos.filter(item => item.id !== todo.id);
    //console.log(newTodos);

    localStorage.setItem("todos", JSON.stringify([...newTodos, todo]))
}

const updateCompetedMark = (todo) => {
    const todos = getTodos();
    const newTodos = todos.filter(item => item.id !== todo.id);
    //console.log(newTodos);
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

