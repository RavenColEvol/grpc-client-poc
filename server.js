var PROTO_PATH = __dirname + '/todo.proto';
var PORT = process.env.PORT || 9090;
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(PROTO_PATH,{});

var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var todo = protoDescriptor.todo;
var todos = [];

if( require.main === module ) {
    var server = new grpc.Server();
    server.addService(todo.Todo.service, {
        createTodo,
        deleteTodo,
        getTodos
    });
    server.bindAsync(
        `0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),(err, port) => {
            if(err) throw err;
            console.log(`Server running on port ${port}`);
            server.start();
        }
    )
}

function createTodo(call, callback) {
    console.log(call);
    const todo = Object.assign({}, call.request);
    todo.id = todos.length + 1;
    todos.push(todo);
    callback(null, todo);
}

function deleteTodo(call, callback) {
    const { id } = call.request || {};
    const idx = todos.findIndex(todo => todo.id === id);
    if(idx === -1) {
        callback({
            code: grpc.status.NOT_FOUND,
            details: 'Todo not found'
        });
    } else {
        const todo = todos[idx];
        todos.splice(idx, 1);
        callback(null, todo);
    }
}

function getTodos(call, callback) {
    callback(null, { todos });
}