/*Question 1: Working with prototype
    true : rabbit.jumps
null : jumps on animal
undefined : none have jumps

Question 2: Searching algorithm
pockets → bed → table → head

1.
table.__proto__ = head;
bed.__proto__ = table;
pockects.__proto__ = bed;

2. as head.glasses

Question 3:
let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
 call rabbit.eat(): which object receives full property :

 Question 4: Why are both hamsters full?
 Solution: assign directly e.g
 eat(food) {
        this.stomach= [food];
    }

    or create separate stomach [] in each object: if each object has to maintain each state

*/
/*let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
//alert( speedy.stomach ); // apple
console.log(speedy.stomach);

// This one also has it, why? fix please.
//alert( lazy.stomach ); // apple
console.log(lazy.stomach);


 */


