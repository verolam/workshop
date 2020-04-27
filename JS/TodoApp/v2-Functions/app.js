//alert("It's working!");
//confirm("It's working!");

/* TODO LIST - Global scope
---------------------------------*/

let todoList = [
  "Go shopping",
  "Buy tobacco",
  "Do this",
  "Do that"
];


/* DISPLAY TODO
---------------------------------*/
function displayTodos(){

  // Local scope
  
  console.log(todoList);

}


/* ADD TODO
---------------------------------*/
function addTodos(arg){

todoList.push(arg);
displayTodos();

}

addTodos("My New todo");


/* Change a TODO
---------------------------------*/
function changeTodo(index, text){

  todoList[index] = text;
  displayTodos();
   
  }
  
  changeTodo(1, "Buy sugar");
  changeTodo(2, "Go for a walk");
  

  /* Delete a TODO
---------------------------------*/
function deleteTodo(index1, numberToDelete = 1){

  todoList.splice(index1, numberToDelete);
  displayTodos();
   
  }
  
  deleteTodo(1,1);



  /* OBJECTS
---------------------------------*/
  
  