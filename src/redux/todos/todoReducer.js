import {
    ADDTODO,
    ALLCOMPLETE,
    CLEARCOMPLETE,
    DELETETODO,
    SELECTCOLOR,
    TOGGLE,
} from "./actionTypes";

export const initialState = [
    {
        id: 1,
        text: "Learn React JS",
        completed: true,
    },
    {
        id: 2,
        text: "Learn Redux",
        completed: false,
        color: "green",
    },
];

function nextToDoId(todosArray) {
    const maxId = todosArray.reduce(
        (previousId, todo) => Math.max(todo.id, previousId),
        0
    );
    return maxId + 1;
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
            return [
                ...state,
                {
                    id: nextToDoId(state),
                    text: action.payload,
                },
            ];

        case TOGGLE:
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            });

        case SELECTCOLOR:
            return state.map((todo) => {
                if (todo.id !== action.payload.id) {
                    return todo;
                }
                return {
                    ...todo,
                    color: action.payload.color,
                };
            });

        case DELETETODO:
            return state.filter((todo) => todo.id !== action.payload);

        case ALLCOMPLETE:
            return state.map((todo) => {
                return {
                    ...todo,
                    completed: true,
                };
            });

        case CLEARCOMPLETE:
            return state.filter((todo) => !todo.completed);

        default:
            return state;
    }
};
