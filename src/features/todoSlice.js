
import { createSlice } from "@reduxjs/toolkit";

const initialTodo = {
    todo: [
        {
            id: 1,
            title: "CSS",
            description: "this is cascading style sheet"
        },
        {
            id: 2,
            title: "python",
            description: "this is a high level programming language"
        },
    ],
};



export const todoSlice = createSlice({
    name: "todo",
    initialState: initialTodo,
    reducers: {
        getAllTodo: (state) => state,

        addTodo: (state, action) => {
            state.todo.push(action.payload);
        },

        updateTodo: (state, action) => {
            const { id, title, description} = action.payload;
            const isExistTodo = state.todo.filter(item => item.id == id);
            if (isExistTodo) {
                isExistTodo[0].title = title;
                isExistTodo[0].description = description;
            }
        },

        deleteTodo: (state, action) => {
            const id = action.payload;
            state.todo = state.todo.filter((item) => item.id !== id);
        }
    },
});

export const { getAllTodo, addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;