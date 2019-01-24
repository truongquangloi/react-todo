import * as firebase from "firebase";
 
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBjl8LIkjHOo0CS39mOSq1fIWDsuJOvYgY",
    authDomain: "fir-a4bff.firebaseapp.com",
    databaseURL: "https://fir-a4bff.firebaseio.com",
    projectId: "fir-a4bff",
    storageBucket: "fir-a4bff.appspot.com",
    messagingSenderId: "851491595278"
};

firebase.initializeApp(config);

const db = firebase.database();

/*db.ref('todo').set({
    action: 'learn React',
    status: 'todo'
});

db.ref('todo').update({
    action: 'learn PHP',
    status: null
});*/

//db.ref('todo/status').remove()


/*db.ref('todo').set([
    {
        action: 'learn react',
        status: 'todo'
    },
    {
        action: 'learn PHP',
        status: 'todo'
    },
    {
        action: 'learn Angular',
        status: 'done'
    },
])*/

/*db.ref('todo').push({
    action: 'learn PHP',
    status: 'todo'
});*/

/*db.ref('todo').once('value')
.then((snapshot)=>{
    snapshot.forEach((item)=>{
        console.log(item.key);
        console.log(item.val());
    })
}).catch((e)=> {
    console.log(e);
})*/

/*db.ref('todo').on('value', (snapshot) => {
    snapshot.forEach((item)=>{
        console.log(item.key);
        console.log(item.val());
    })
})*/

export const loadTodos = () => {
    return new Promise( (resolve, reject) => {
        const todos = [];
        db.ref('todo').once('value')
        .then((snapshot)=>{            
            snapshot.forEach((item)=>{
                var todo = item.val();
                todo.key = item.key;
                todos.push(todo);
            })
            return resolve(todos);
        }).catch((e)=> {
            return reject(e);
        })
    }); 
}

export const pagination = (key, limit) => {
    return new Promise( (resolve, reject) => {
        const todos = [];
        db.ref('todo').startAt(1).once('value')
        .then((snapshot)=>{            
            snapshot.forEach((item)=>{
                console.log(item);
                var todo = item.val();
                todo.key = item.key;
                todos.push(todo);
            })
            return resolve(todos);
        }).catch((e)=> {
            return reject(e);
        })
    }); 
}

export const createTodo = (item) => {
    return new Promise((resolve, reject) => {
        db.ref('todo').push({
            action: item.action,
            status: item.status,
            id: item.id,
            created_at: item.created_at
        }).then( ()=> {
            console.log(item);
            return resolve(true);
        }).catch( (e) => {
            console.log (e);
            return reject(e);
        })
    })
} 

export const updateTodo = (key, item) => {
    return new Promise((resolve, reject) => {
        db.ref('todo/'+key).update({
            action: item.action,
            status: item.status,
        }).then( ()=> {
            console.log(item);
            return resolve(true);
        }).catch( (e) => {
            console.log (e);
            return reject(e);
        })
    })
}

export const removeTodo = (id) => {
    return new Promise((resolve, reject) => {
        db.ref('todo/'+id).remove()
        .then(() => {
            return resolve(true);
        }).catch((e)=> {
            return reject(e);
        })
    })
}


