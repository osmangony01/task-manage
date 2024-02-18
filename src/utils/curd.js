

const getTodo = () => {
    let todoInfo = [];

    const todoData = localStorage.getItem('todoData');
    if (todoData) {
        todoInfo = JSON.parse(todoData);
    }
    return todoInfo;
}

const addTodo = (todo) => {
    const todoInfo = getTodo();
    const id = todoInfo.length + 1;
    const newTodo = { id: id, ...todo };
    todoInfo.push(newTodo);
    localStorage.setItem('todoData', JSON.stringify(todoInfo));
}

const findTodo = (id) => {
    const todos = getTodo();
    const findData = todos.find(item => item.id == id);
    return findData;
}

const updateTodo = (todo, id) => {
    const todos = getTodo();
    const filteredData = todos.filter(item => item.id !== id);
    filteredData.push(todo);
    localStorage.setItem('todoData', JSON.stringify(filteredData));
}

const deleteTodo = (id) => {
    const todo = getTodo();
    const filteredData = todo.filter(item => item.id !== id);
    localStorage.setItem('todoData', JSON.stringify(filteredData));
}


export {
    addTodo,
    getTodo,
    findTodo,
    updateTodo,
    deleteTodo
};