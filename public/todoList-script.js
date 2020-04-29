// what to do when we recieve the request
var buttonClick = function (event) {
  var responseHandler = function () {
    // console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);
    console.log(event.target.closest(".eachTodo"));
    // var hello = document.querySelector("h1");
    // hello.innerText = "";
    // var id = querySelector;
    // console.log(this.reponse);
    event.target.closest(".eachTodo").innerText = "";

    //   db.todoListModel.deleteTodo(values, whenDoneInModel);
  };
  var request = new XMLHttpRequest();
  request.responseType = "json";
  // listen for the request response
  request.addEventListener("load", responseHandler);

  // ready the system by calling open, and specifying the url
  var url = "http://127.0.0.1:3000/todolist";
  request.open("GET", url);

  // send the request
  request.send();
};

var allButton = document.querySelectorAll(".delete");
var allTodo = document.querySelectorAll(".eachTodo");
console.log(allButton);
console.log(allTodo);
for (var i = 0; i < allButton.length; i++) {
  var eachButton = allButton[i];
  var eachItem = allTodo[i];
  eachButton.addEventListener("click", buttonClick);
}
