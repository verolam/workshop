// If you re inside a function you can look out and see data (variables) but 
// the opposite is not true : You can't from outside a function get a variable in function 

// HTML AND DOM : Ther eshould be a button for displayItems and ToggleAll

// Object
//------------------
let todoItems = {
  items : [ 

  ],

  displayItems : function() {
  
    if ( this.items.length === 0 ) {
      console.log("Your Items list is empty !!!")
    } else {
      console.log('My items:');
      for (let i=0; i<this.items.length; i++){
       
        //check if .completed is true or false ==> print : (X) or ( )
        if (this.items[i].completed === true ) {
          console.log ('(X)',this.items[i].todoText );
        } else {
          console.log ('( )',this.items[i].todoText );
        }
      }
    }
   
  },

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
   
    this.displayItems();
  },

  changeItem : function(position, todoText) {
    //this.items[position] = newValue;
    this.items[position].todoText = todoText;
    this.displayItems();
  },

  deleteItem : function(position) {
    this.items.splice(position,1); // if you put only position , delete all items after position!!
    this.displayItems();
  },

  toggleCompleted : function(position) {
    let item = this.items[position]; // Target the item's position to change completed
    item.completed = !item.completed; // toggle completed change status false<=>true
    this.displayItems();
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
    this.displayItems();
  }
   
}

// 1-  We want to get access to the DisplayItems button
// 2 - We want to run the DisplayItem Method when someone 
//     click on the button display

// handlers are method which permit to make link between HTML and JS

let handlers = {
  displayItems: function(){
    todoItems.displayItems();
  },

  addItem: function() {
    let addItemdTextInput = document.getElementById('addItemTextInput');
    todoItems.addItem(addItemTextInput.value);
    addItemdTextInput.value = ' ';
  },

  changeItem: function() {
    let changeItemPositionInput = document.getElementById('changeItemPositionInput');
    let changeItemTextInput = document.getElementById('changeItemTextInput'); 
    todoItems.changeItem(changeItemPositionInput.valueAsNumber,changeItemTextInput.value);
    changeItemTextInput.value = '';
    changeItemPositionInput.value = '';
  },

  deleteItem: function() {
    let deleteItemPositionInput = document.getElementById('deleteItemPositionInput');
    console.log(deleteItemPositionInput.valueAsNumber);
    todoItems.deleteItem(deleteItemPositionInput.valueAsNumber);
    deleteItemPositionInput.value = '';
  }, 

  toggleCompleted: function() {
    let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoItems.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },

  toggleAll: function() {
    todoItems.toggleAll();
  }
}

