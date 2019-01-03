import React from "react";

import Header from "./header";
import TodoList from "./todo-list";
import AddTodo from "./add-todo";
import Footer from "./footer";

class AppTodo extends React.Component{
    
    state = {
        todo: ['learn PHP', 'learn NodeJS', 'learn React']
    };
    
    addTodo = (item) => {
        this.setState((prevState) => {
            return {
                todo: prevState.todo.concat(item)
            }
        });
    }

    delTodo = (key) => {
        var filteredItems = this.state.todo.filter( function(item){
            return (item.key !== key)
        });
    }

    render(){
        return(
            <div>
                <Header></Header>  
                <TodoList key={this.state.todo} todos={this.state.todo} delToto={this.delTodo(this.delTodo)}></TodoList>                          
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <Footer></Footer>
            </div>
        )
    }
}

export default AppTodo;
