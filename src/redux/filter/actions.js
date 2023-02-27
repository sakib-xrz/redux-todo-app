import { COLORCHANGE, STATUSCHANGE } from "./actionTypes";

export const statusChange = (status) => {
    return {
        type: STATUSCHANGE,
        payload: status,
    };
};

export const colorChange = (colors, changeTpe) => { 
    return {
        type: COLORCHANGE,
        payload: {
            colors,
            changeTpe,
        },
    };
};
