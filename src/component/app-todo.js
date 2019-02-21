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
        todoPages: [],      
    };

    componentDidUpdate = () => {
    }
    componentDidMount = () => {
        var pageNumbers = [];
        var total = 1;
        Firebase.loadTodos().then( (data) => {   
            for (let i = 1; i <= Math.ceil(data.length/this.state.todosPerPage); i++) {
                pageNumbers.push(i);
            }
            total = data.length;
            return Firebase.pagination((this.state.currentPage-1)*this.state.todosPerPage, this.state.currentPage*this.state.todosPerPage);
        }).then((data2) => { 
            this.setState(() => {
                return {
                    todoPages: pageNumbers,
                    total: total, 
                    todo: data2
                }
            })

        }).catch( (e) => {
            console.log(e);
            alert('Có lỗi xảy ra');
        });

        /*var promise = {
            todos: Firebase.loadTodos(),
            pagin: Firebase.pagination(1,3)
        };
        Promise.all(promise).then((result) {
            ...
        });*/
    }
  
    componentWillMount = () =>  {
  
    }

    changeCurrentPage = (pageCurrent) => {
        console.log(pageCurrent);
        this.setState( (prevState) => {
            return {
                currentPage: pageCurrent
            }
        })
    }

    addTodo = (value) => {
        var item = {
            id: todoId(), 
            status: 'todo',
            action: value,
            created_at: moment().format('YYYY-MM-DD')
        }
        var promiseAdd = [
            Firebase.createTodo(item),
            Firebase.loadTodos(),
            Firebase.pagination((this.state.currentPage-1)*this.state.todosPerPage, this.state.currentPage*this.state.todosPerPage)
        ];
        Promise.all(promiseAdd).then((newData) => {
            var total = newData[2].length;
            var pageNumbers = [];
            for (let i = 1; i <= Math.ceil(newData[2].length/this.state.todosPerPage); i++) {
                pageNumbers.push(i);
            }            
            alert('Thêm thành công');
            this.setState(() => {
                return {
                    todoPages: pageNumbers,
                    total: total, 
                    todo:  newData[3],
                }
            })
        }).catch( (e) => {
            console.log(e);
            alert('Có lỗi xảy ra');
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
    delTodo = (id) => {
        var promiseDel = [
            Firebase.removeTodo(id),
            Firebase.pagination((this.state.currentPage-1)*this.state.todosPerPage, this.state.currentPage*this.state.todosPerPage)
        ];
        Promise.all(promiseDel).then((newData) => {
            console.log(newData);
            alert('Thêm thành công');
            this.setState(() => {
                return {
                    todo: newData[1],
                }
            })
        }).catch( (e) => {
            console.log(e);
            alert('Có lỗi xảy ra');
        });
    }

    updateTodo = (key, value, status) => {
        var item = {
            status: status,
            action: value,
        }
        var promiseDel = [
            Firebase.updateTodo(key, item),
            Firebase.pagination((this.state.currentPage-1)*this.state.todosPerPage, this.state.currentPage*this.state.todosPerPage)
        ];
        Promise.all(promiseDel).then((newData) => {
            console.log(newData);
            alert('Thêm thành công');
            this.setState(() => {
                return {
                    todo: newData[1],
                }
            })
        }).catch( (e) => {
            console.log(e);
            alert('Có lỗi xảy ra');
        });      
    }

    render = () => {        
        return(
            <div className="container">
                <Header></Header>  
                <TodoList todos={this.state.todo} delTodo={this.delTodo} updateTodo={this.updateTodo}
                changeStatus={this.changeStatus}></TodoList>  
                <Pagination pageNumbers={this.state.todoPages} currentPage={this.state.currentPage} changeCurrentPage={this.changeCurrentPage}></Pagination>                        
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <Footer></Footer>
            </div>
        )
        
    }
}

export default AppTodo;
