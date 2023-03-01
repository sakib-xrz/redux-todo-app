import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const TodoLists = () => {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    return (
        <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos.map((todo, index) => (
                <SingleTodo key={index} todo={todo} />
            ))}
        </div>
    );
};

export default TodoLists;
