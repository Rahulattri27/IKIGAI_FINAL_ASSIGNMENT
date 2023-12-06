


import { useContext , createContext } from "react";

export const ToDoContext = createContext({//we are making this context to be used in 
    // other components for transferring data such as todos and functions
    todos: [// this todo defines main todo list which is used to store all the todos
        {
            id:1,// this id is used to uniquely identify the todos  
            todo: "Learn React",// this todo is used to store the todo
            completed: false// this completed is used to store the status of the todo
        }
    ],
    addToDo: (todo) => {},// this addToDo is used to add the todo to the todo list
    updateTodo:(id,todo)=>{},// this updateTodo is used to update the todo in the todo list
    deleteTodo:(id)=>{},// this deleteTodo is used to delete the todo from the todo list
    toggleComplete:(id)=>{}// this toggleComplete is used to toggle the status of the todo
    // the toggle here means to change the status of the todo from completed to not completed


});

export const useToDo = () => {// this useToDo is used to use the context in the components
    return useContext(ToDoContext)// this return is used to return the various data such as 
}// todos, addToDo, updateTodo, deleteTodo, toggleComplete

export const ToDoProvider = ToDoContext.Provider// this ToDoProvider is used to provide the context to the components