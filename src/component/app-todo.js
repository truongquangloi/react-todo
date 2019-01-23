import React from "react";
import { loadTodos, createTodo } from "../database/firebase";

import Header from "./header";
import TodoList from "./todo-list";
import AddTodo from "./add-todo";
import Footer from "./footer";

const todoId = require('uuid/v4');
var moment = require('moment');

class AppTodo extends React.Component{
    // Initialize Cloud Firestore through Firebase
    state = {
        todo: []
    };
    addTodo = (value) => {
        var item = {
            id: todoId(), 
            status: 'todo',
            action: value,
            created_at: moment().format('YYYY-MM-DD')
        }
        createTodo(item).then(()=>{
            alert('thêm thành công');
        }).catch( (e) => {
            console.log(e);
            alert('có lỗi xảy ra');
        })
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

    updateTodo = (index, value, status) => {
        this.setState ((prevState) => {
            let newTodo = prevState.todo; 
            newTodo[index].action = value;
            newTodo[index].status = status;
            return {
                todo: newTodo
            }
        })        
    }

    render = () => {
        loadTodos().then( (data) => {
            this.setState(() => {
                return {
                    todo: data
                }
            });
        }).catch( (e) => {
            console.log(e);
            alert('có lỗi xảy ra');
        });

        return(
            <div className="container">
                <Header></Header>  
                <TodoList todos={this.state.todo} delTodo={this.delTodo} updateTodo={this.updateTodo}
                changeStatus={this.changeStatus}></TodoList>                          
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <Footer></Footer>
            </div>
        )
        
    }
}

export default AppTodo;
