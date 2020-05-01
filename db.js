/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

const pg = require("pg");
const url = require("url");

var configs;

if (process.env.DATABASE_URL) {
  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(":");

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split("/")[1],
    ssl: true,
  };
} else {
  configs = {
    user: "yannieyeung",
    host: "127.0.0.1",
    database: "project2_todoapp",
    port: 5432,
  };
}

const pool = new pg.Pool(configs);

pool.on("error", function (err) {
  console.log("idle client error", err.message, err.stack);
});

/*
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 */

const signedUpFunc = require("./models/signUpVerified.js");
const signedUpModel = signedUpFunc(pool);

const todoListFunc = require("./models/todoList.js");
const todoListModel = todoListFunc(pool);

const getTodoListFunc = require("./models/getTodoList.js");
const getTodoListModel = getTodoListFunc(pool);

const deleteTodoListFunc = require("./models/deleteTodoList.js");
const deleteTodoModel = deleteTodoListFunc(pool);

const addTodoFormFunc = require("./models/addTodo.js");
const addTodoFormModel = addTodoFormFunc(pool);

const addOneTodoFunc = require("./models/addOneTodo.js");
const addOneTodoModel = addOneTodoFunc(pool);

/*
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 */

module.exports = {
  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  // get a reference to end the connection pool at server end
  pool: pool,

  /*
   * ADD APP MODELS HERE
   */
  signedUpModel: signedUpModel,
  todoListModel: todoListModel,
  getTodoListModel: getTodoListModel,
  deleteTodoModel: deleteTodoModel,
  addTodoFormModel: addTodoFormModel,
  addOneTodoModel: addOneTodoModel,

  // users: userModelsObject,
};
