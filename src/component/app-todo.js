import React from "react";
import * as Firebase from "../database/firebase";

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
        Firebase.createTodo(item).then(()=>{
            alert('Thêm thành công');
        }).catch( (e) => {
            console.log(e);
            alert('Có lỗi xảy ra');
        })
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
    delTodo = (id) => {
        Firebase.removeTodo(id).then(()=>{
            alert('Xóa thành công');
        }).catch( (e) => {
            console.log(e);
            alert('Có lỗi xảy ra');
        })
    }

    updateTodo = (key, value, status) => {
        var item = {
            status: status,
            action: value,
        }
        Firebase.updateTodo(key, item).then(()=> {
            alert('Thêm thành công');
        }).catch(()=> {
            alert('Có lỗi xảy ra');
        });       
    }

    render = () => {
        Firebase.loadTodos().then( (data) => {
            this.setState(() => {
                return {
                    todo: data
                }
            });
        }).catch( (e) => {
            console.log(e);
            alert('Có lỗi xảy ra');
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
