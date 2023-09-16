
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
        todosData = JSON.parse(todos);
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


export {
    saveTodosToLocalDB, 
    getTodos,
    addTodo,
    deleteTodo,
    
}

