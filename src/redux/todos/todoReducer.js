import { ADDTODO, TOGGLE } from "./actionTypes";
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

function nextToDoId(array) {
    const maxId = array.reduce(
        (previousId, currentEl) => Math.max(currentEl.id, previousId),
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
                    // eslint-disable-next-line no-undef
                    completed: !completed,
                };
            });

        default:
            return state;
    }
};
