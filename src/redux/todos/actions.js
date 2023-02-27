import {
    ADDTODO,
    ALLCOMPLETE,
    CLEARCOMPLETE,
    DELETETODO,
    SELECTCOLOR,
    TOGGLE,
} from "./actionTypes";

export const addTodo = (todoText) => {
    return {
        type: ADDTODO,
        payload: todoText,
    };
};

export const allComplete = () => {
    return {
        type: ALLCOMPLETE,
    };
};

export const clearComplete = () => {
    return {
        type: CLEARCOMPLETE,
    };
};

export const toggle = (todoId) => {
    return {
        type: TOGGLE,
        payload: todoId,
    };
};

export const selectColor = (todoId, color) => {
    return {
        type: SELECTCOLOR,
        payload: {
            todoId,
            color,
        },
    };
};

export const clearTodo = (todoId) => {
    return {
        type: DELETETODO,
        payload: todoId,
    };
};
