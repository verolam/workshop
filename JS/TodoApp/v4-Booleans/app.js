let todos = {


  /* TODO LIST - Global scope
  -------------------------------*/
  todoList: [

    {
      text: "Go shopping", //todoList[0].text
      completed: false
    },

    {
      text: "Buy tobacco", //todoList[0].text
      completed: false
    },

    {
      text: "Do this", //todoList[0].text
      completed: false
    },

    {
      text: "Do that", //todoList[0].text
      completed: false
    }

  ],


  /* DISPLAY TODOS
  -------------------------------*/
  displayTodos: function() {
    console.log(this.todoList);
  },


  /* ADD TODO
  -------------------------------*/
  addTodo: function(newText, newCompleted = false) {

    this.todoList.push({
      text: newText,
      completed: newCompleted
    });

    this.displayTodos();
  },

  /* CHANGE A TODO
  -------------------------------*/
  changeTodo: function(index, text) {

    this.todoList[index] = text;
    
    this.displayTodos();

  },



  /* DELETE A TODO
  -------------------------------*/
  deleteTodo: function(index, numberToDelete = 1) {

    this.todoList.splice(index, numberToDelete);
    this.displayTodos();

  }


}


/*  PRACTICE AREA
------------------------------------------*/
//  Only arrays variante

let __myList = [

  ["Learn CSS", "2020.04.31", true]
  ["Learn JS", "2020.04.31", true]
  ];
  
  
  // With object
  let myList = [
  
  {
    text:     "Learn CSS",
    deadline: "2020.04.30",
    completed: true
  },
  
  {
    text:     "Learn JavaScript",
    deadline: "2020.05.15",
    completed: false
  },
  
  {
    text:     "Learn PHP",
    deadline: "2020.06.11",
    completed: false
  },
  
  {
    text:     "Learn Zwilli",
    deadline: "2020.06.11",
    completed: false
  }
  
  ];
  
  console.log(myList[0]["text"]); // square brakets notation
  console.log(myList[0].text);
  
  myList[1].completed = true; 
  console.log(myList[1]);
  
  myList.splice(1, 1); //delete the second item
  console.log(myList);
  
  myList.push({text: "Learn Java",
                deadline:" 2020.07.14", 
                completed: false});
  console.log(myList);
  
  
   show(myList); 
  
  
  
  /* ADD Todo function
   ------------------------------------*/
  
  function addTodo(info){
  myList.push(info);
  
  };
  
  addTodo({
    text:     "Learn Cobol",
    deadline: "2020.06.11",
    completed: false
  });
  
  // console.log(myList);
  
  
  // Refactoring
  function addTodo(newText, newDeadline, newCompleted =false){
  
  myList.push({
  text: newText,
  deadline: newDeadline,
  completed: newCompleted
  
  })
  
  };
  
  addTodo("Learn Java", "2020.04.26", false);
  //console.log(myList);
  
  /*  Delete Todo
  ------------------------------------ */
  function deleteTodo(index, deleteN = 1){
   
    myList.splice(index,deleteN);
    
    };
    
  console.log(myList.length);
  
  
  // Delete 1 item
  //  deleteTodo(1);
  
   // Delete everything after the specified item
   //deleteTodo(1, myList.length); 
   // console.log(myList);
  
  
  /* Change a key value
  ------------------------------*/
    
    function changeKeyValue(index,key, value){
  // the key is the argument and should be used inside braquets []
  //Otherwise, with the dot notation, the key will be considered as a real key 
    //  myList[index].key = value; //WRONG
      myList[index][key] = value; //GOOD
    };
  
  
   //  
    changeKeyValue(1, "completed", false);
    changeKeyValue(1, "text", "Learn PHP MF");
    console.log(myList);


























