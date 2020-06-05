// If you re inside a function you can look out and see data (variables) but 
// the opposite is not true : You can't from outside a function get a variable in function 

// HTML AND DOM : Ther eshould be a button for displayItems and ToggleAll

// debugger; ==> to launch debuuger

// Version where we escape the console ==> no more need of displayItems()


// Object
//------------------
let todoItems = {
  items : [ 

  ],

  addItem : function(todoText){
    if (todoText === ''){
      prompt('Field is empty');
      return;
    } else {
      this.items.push({
        todoText : todoText,
        completed : false
      });
    }
    
  },

  changeItem : function(position, todoText) {
    //this.items[position] = newValue;
    this.items[position].todoText = todoText;
    
  },

  deleteItem : function(position) {
    this.items.splice(position,1); // if you put only position , delete all items after position!!
    
  },

  toggleCompleted : function(position) {
      let item = this.items[position]; // Target the item's position to change completed
      item.completed = !item.completed; // toggle completed change status false<=>true
            
  },

  // Case 1 : Toggle All : If everything is completed = true, make everything completed = false
  toggleAll : function() {
    let totalItems = this.items.length;
    let totalCompleted = 0;
    //Get total of completed
    for (let i=0; i< totalItems; i++) {
      if ( this.items[i].completed === true) {
        totalCompleted++;
      } 
    }
    if (totalCompleted === totalItems ) {
      for (let i=0; i < totalItems; i++) {
        this.items[i].completed = false;
      } 
    } 
    // Case 2 : otherwise make everything false  
    else {
      for (let i=0; i < totalItems; i++) {
        this.items[i].completed = true;
      }
    }
   
  }
   
}

// 1-  We want to get access to the DisplayItems button
// 2 - We want to run the DisplayItem Method when someone 
//     click on the button display

// handlers are method which permit to make link between HTML and JS

let handlers = {
  addItem: function() {
    let addItemdTextInput = document.getElementById('addItemTextInput');
    todoItems.addItem(addItemTextInput.value);
    addItemdTextInput.value = ' ';
    view.displayItems();
  },

  changeItem: function() {
    let changeItemPositionInput = document.getElementById('changeItemPositionInput');
    let changeItemTextInput = document.getElementById('changeItemTextInput'); 
    todoItems.changeItem(changeItemPositionInput.valueAsNumber,changeItemTextInput.value);
    changeItemTextInput.value = '';
    changeItemPositionInput.value = '';
    view.displayItems();
  },

  deleteItem: function() {
    let deleteItemPositionInput = document.getElementById('deleteItemPositionInput');
    console.log(deleteItemPositionInput.valueAsNumber);
    todoItems.deleteItem(deleteItemPositionInput.valueAsNumber);
    deleteItemPositionInput.value = '';
    view.displayItems();
  }, 

  toggleCompleted: function() {
    let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoItems.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayItems();
  },

  toggleAll: function() {
    todoItems.toggleAll();
    view.displayItems();
  }
}

//object view with method to display all the items 
// of the todolist by adding an element 'li' in the 'ul'

let view = {
  displayItems: function(){
    let todosUl = document.querySelector('ul');
    
    todosUl.innerHTML = '';
    for (let i=0; i<todoItems.items.length; i++) {
      let todoLi = document.createElement('li');
      let item = todoItems.items[i];
      let todoTextWithCompletion = '';

      if (item.completed === true) {
        todoTextWithCompletion = '(x)' + item.todoText;
      } 
      else {
        todoTextWithCompletion = '( )' + item.todoText;
      }

      todoLi.textContent= todoTextWithCompletion
      todosUl.appendChild(todoLi);
    }
  }
}

