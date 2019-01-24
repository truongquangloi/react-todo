import React from "react";
import * as Firebase from "../database/firebase";

import Header from "./header";
import TodoList from "./todo-list";
import Pagination from "./pagination";
import AddTodo from "./add-todo";
import Footer from "./footer";

const todoId = require('uuid/v4');
var moment = require('moment');

class AppTodo extends React.Component{
    // Initialize Cloud Firestore through Firebase
    state = {
        total: 0,
        todo: [],
        currentPage: 1,
        todosPerPage: 3,  
        todoPages: 0,      
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
                    total: data.length,
                    todoPages: Math.ceil(data.length/this.state.todoPages)
                }
            });
        }).catch( (e) => {
            console.log(e);
            alert('Có lỗi xảy ra');
        });
        console.log(this.state.currentPage);
        Firebase.pagination(1, 3)
        .then((data) => { 
            console.log(data);
            this.setState(() => {
                return {
                    todo: data
                }
            })
        }).catch((e) => {
            console.log(e);
            alert('Có lỗi xảy ra');
        })
        console.log(this.state.todoPages);
        return(
            <div className="container">
                <Header></Header>  
                <TodoList todos={this.state.todo} delTodo={this.delTodo} updateTodo={this.updateTodo}
                changeStatus={this.changeStatus}></TodoList>  
                <Pagination pageNumers={this.state.todoPages}></Pagination>                        
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <Footer></Footer>
            </div>
        )
        
    }
}

export default AppTodo;
