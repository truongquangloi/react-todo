import React from "react";
import ReactDOM from "react-dom";
import "./style/style.scss";
import "normalize.css/normalize.css";
//import "./database/firestore";
//import { loadTodos } from "./database/firebase";

import AppTodo from "./component/app-todo";

/*loadTodos().then( (data) => {
    ReactDOM.render(<AppTodo todos={data}/>, document.getElementById('app'));
}).catch( (e) => {
    console.log(e);
    alert('có lỗi xảy ra');
});*/

ReactDOM.render(<AppTodo />, document.getElementById('app'));

