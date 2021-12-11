/**
 * @fileoverview gRPC-Web generated client stub for todo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.todo = require('./todo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.TodoClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.TodoPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.TodoItem,
 *   !proto.todo.TodoItem>}
 */
const methodDescriptor_Todo_createTodo = new grpc.web.MethodDescriptor(
  '/todo.Todo/createTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.TodoItem,
  proto.todo.TodoItem,
  /**
   * @param {!proto.todo.TodoItem} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.TodoItem.deserializeBinary
);


/**
 * @param {!proto.todo.TodoItem} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.todo.TodoItem)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.TodoItem>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoClient.prototype.createTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.Todo/createTodo',
      request,
      metadata || {},
      methodDescriptor_Todo_createTodo,
      callback);
};


/**
 * @param {!proto.todo.TodoItem} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.TodoItem>}
 *     Promise that resolves to the response
 */
proto.todo.TodoPromiseClient.prototype.createTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.Todo/createTodo',
      request,
      metadata || {},
      methodDescriptor_Todo_createTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.TodoId,
 *   !proto.todo.TodoItem>}
 */
const methodDescriptor_Todo_deleteTodo = new grpc.web.MethodDescriptor(
  '/todo.Todo/deleteTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.TodoId,
  proto.todo.TodoItem,
  /**
   * @param {!proto.todo.TodoId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.TodoItem.deserializeBinary
);


/**
 * @param {!proto.todo.TodoId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.todo.TodoItem)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.TodoItem>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoClient.prototype.deleteTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.Todo/deleteTodo',
      request,
      metadata || {},
      methodDescriptor_Todo_deleteTodo,
      callback);
};


/**
 * @param {!proto.todo.TodoId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.TodoItem>}
 *     Promise that resolves to the response
 */
proto.todo.TodoPromiseClient.prototype.deleteTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.Todo/deleteTodo',
      request,
      metadata || {},
      methodDescriptor_Todo_deleteTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.Empty,
 *   !proto.todo.TodoItems>}
 */
const methodDescriptor_Todo_getTodos = new grpc.web.MethodDescriptor(
  '/todo.Todo/getTodos',
  grpc.web.MethodType.UNARY,
  proto.todo.Empty,
  proto.todo.TodoItems,
  /**
   * @param {!proto.todo.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.TodoItems.deserializeBinary
);


/**
 * @param {!proto.todo.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.todo.TodoItems)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.TodoItems>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoClient.prototype.getTodos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.Todo/getTodos',
      request,
      metadata || {},
      methodDescriptor_Todo_getTodos,
      callback);
};


/**
 * @param {!proto.todo.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.TodoItems>}
 *     Promise that resolves to the response
 */
proto.todo.TodoPromiseClient.prototype.getTodos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.Todo/getTodos',
      request,
      metadata || {},
      methodDescriptor_Todo_getTodos);
};


module.exports = proto.todo;

