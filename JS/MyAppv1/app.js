// If you re inside a function you can look out and see data (variables) but 
// the opposite is not true : You can't from outside a function get a variable in function 




/* Sandwich recipe
---------------------------------*/

let Items = [
"bread",
"turkey",
"ham",
"butter",
"vinegar",
"cheddar",
"tomato",
"onion",
"lettuce",
"salami"
];


//console.log("List in the beginning", Items);


// Display sandwichItems
//------------------
function displayItems() {
 // console.log('My Items:',Items);
}

displayItems();


// Add Item
//------------------
function addItem(Item) {
  Items.push("Item")
}
addItem('cucumber');
displayItems();


// Delete Item
//------------------
function deleteItem(position) {
  Items.splice(position,1);
}

deleteItem(1);
displayItems();


// Change Item
//------------------
function changeItem(index,newValue) {
  Items[index] = newValue;
}

changeItem(2,'carrot');
displayItems();



// Object
//------------------



let todoItems = {
  items : [
    "bread",
    "turkey",
    "ham",
    "butter",
    "vinegar",
    "cheddar",
    "tomato",
    "onion",
    "lettuce",
    "salami"
  ],
  displayItems : function() {
    console.log ('My items : ', this.items);
  },

  addItem : function(newItem){
    this.items.push(newItem);
    this.displayItems();
  },
  changeItem : function(position, newValue) {
    this.items[position] = newValue;
    this.displayItems();
  },
  deleteItem : function(position) {{
    this.items.splice(position,1); // if you put only position , delete all items after position!!
    this.displayItems();
  }}
}

 // It should have a DisplayItems Method
 todoItems.displayItems();

 // It should have a addItems Method
 todoItems.addItem('tomato');

 // It should have a changeItems Method
 todoItems.changeItem(4,'ketchup');

 // It should have a deleteItems Method
 todoItems.deleteItem(2);


let sandwich = [];
function makeSandwichWith(filling1,filling2) {
sandwich.push('bread');
sandwich.push(filling1,filling2);
sandwich.push('bread');

}

makeSandwichWith('ham', 'onion');
//console.log(sandwich);