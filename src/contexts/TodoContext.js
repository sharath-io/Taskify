import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos:[
        {
            id:1,
            text:'todo msg',
            isDone: false
        }
    ],
    addTodo:()=>{},
    removeTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleTodo:(id)=>{}
});

export const TodoProvider = TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext);
}