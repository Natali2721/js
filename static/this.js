//hw 5/10

class Storage {

    constructor(items) {
        this.items = items ;
    }

    getItems() {
        return this.items;
    }

   addItem(newItem) {
        return this.items.push(newItem);
    }
 
    removeItem(itemToRemove) {
      const i = this.items.indexOf(itemToRemove);
      this.items.splice(i, 1);
      
    }

    /*removeItem(itemToRemove) {
    this.items = this.items.filter(item => item !== itemToRemove);
    }*/

 
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


class StringBuilder {
    constructor (initialValue) {
        this.value = initialValue;
    }
    getValue(){
        return this.value;
    }
    padEnd(str){
        this.value = this.value + str;
        return;
    }
    padStart(str){
        this.value = str + this.value;
        return;
    }
    padBoth(str){
        this.value = str + this.value + str;
        return;
    }
    
}


// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

