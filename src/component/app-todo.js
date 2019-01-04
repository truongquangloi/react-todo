import React from "react";

import Header from "./header";
import TodoList from "./todo-list";
import AddTodo from "./add-todo";
import Footer from "./footer";

const todoId = require('uuid/v4');
var moment = require('moment');

class AppTodo extends React.Component{

    state = {
        todo: [
            {
                id: todoId(), 
                status: 'todo',
                action: 'learn PHP',
                created_date: moment().format('YYYY-MM-DD')
            },
            {
                id: todoId(), 
                status: 'todo',
                action: 'learn CSS',
                created_date: moment().format('YYYY-MM-DD')
            },
            {
                id: todoId(), 
                status: 'todo',
                action: 'learn React',
                created_date: moment().format('YYYY-MM-DD')
            }
        ]
    };
    addTodo = (value) => {
        var item = {
            id: todoId(), 
            status: 'todo',
            action: value,
            created_date: moment().format('YYYY-MM-DD')
        }
        this.setState((prevState) => {
            return {
                todo: prevState.todo.concat(item)
            }
        });
    }
    changeStatus = (newStatus, todoIndex) => {
        this.setState( (prevState) => {
            let newTodo = prevState.todo;
            newTodo[todoIndex].status = newStatus;
            return {
                todo: newTodo
            }
        })
    }
    delTodo = (index) => {
        this.setState( (prevState) => {
            return {
                todo: prevState.todo.filter((item, itemIndex) =>  itemIndex != index )
            }
        })
    }

    updateTodo = (value, index) => {
        this.setState ((prevState) => {
            let newTodo = prevState.todo; 
            newTodo[index].action = value;
            return {
                todo: newTodo
            }
        })        
    }

    render = () => {
        return(
            <div>
                <Header></Header>  
                <TodoList key={this.state.todo} todos={this.state.todo} delTodo={this.delTodo} updateTodo={this.updateTodo}
                changeStatus={this.changeStatus}></TodoList>                          
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <Footer></Footer>
            </div>
        )
    }
}

export default AppTodo;
