// what to do when we recieve the request
var buttonClick = function (event) {
  var responseHandler = function () {
    // console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);
    // console.log(event.target.closest(".eachTodo"));
    // var hello = document.querySelector("h1");
    // hello.innerText = "";
    // var id = querySelector;
    // console.log(this.reponse);

    // event.target.closest(".eachTodo").innerText = "";
    // console.log("++++++++++++++++++++");
    // console.log(this.response);
  };
  console.log("click");
  let id = document.querySelector(".todo_id").value;
  console.log(id);
  console.log(eachButton);

  let todo_item = event.target.closest(".eachTodo");
  todo_item.style = "display:none";
  var request = new XMLHttpRequest();
  request.responseType = "json";
  // listen for the request response
  request.addEventListener("load", responseHandler);

  // ready the system by calling open, and specifying the url
  var url = "/deleteTodolist/" + id;
  request.open("post", url);

  // send the request
  request.send();
};

var allButton = document.querySelectorAll(".delete");
var allTodo = document.querySelectorAll(".eachTodo");
var allTodoId = document.querySelectorAll(".eachTodo");
console.log(allButton);
console.log(allTodo);
for (var i = 0; i < allButton.length; i++) {
  var eachButton = allButton[i];
  var eachItem = allTodo[i];
  var eachItemId = allTodoId[i];
  eachButton.addEventListener("click", buttonClick);
}
