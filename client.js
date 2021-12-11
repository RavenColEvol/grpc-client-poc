const { TodoItem, Empty, TodoId } = require('./todo_pb');
const { TodoClient } = require('./todo_grpc_web_pb');

var client = new TodoClient('http://localhost:8080');

window.createTodo = function (todo) {
    const request = new TodoItem();
    request.setId(-1);
    request.setTitle(todo.title);
    return new Promise((resolve, reject) => client.createTodo(request, {}, (err, response) => {
        if (err) {
            console.error('err',err);
            return reject(err);
        }
        return resolve(response.toObject());
    }));
}

window.deleteTodo = function(id) {
    const request = new TodoId();
    request.setId(id);
    return new Promise((resolve, reject) => client.deleteTodo(request, {}, (err, response) => {
        if (err) {
            console.log(err);
            return reject(err);
        }
        return resolve(response.toObject());
    }));
}

window.getTodos = function() {
    const empty = new Empty();
    return new Promise((resolve, reject) => {client.getTodos(empty, {}, (err, response) => {
        if (err) {
            console.log(err);
            return reject(err);
        }
        const res = response.toObject();
        return resolve(res);
    })})
}