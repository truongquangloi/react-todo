import React from "react";

import Header from "./header";
import TodoList from "./todo-list";
import AddTodo from "./add-todo";
import Footer from "./footer";

class AppTodo extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>  
                <TodoList></TodoList>                          
                <AddTodo></AddTodo>
                <Footer></Footer>
            </div>
        )
    }
}

export default AppTodo;