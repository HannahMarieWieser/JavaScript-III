/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding- The value of'this' will be the global object. EG the function will have 'this' reference (point?) to the global function call etc. 

* 2. Implicit binding- The value of this will be referecned by using a dot, and the object before the dot is what 'this' is regerring to, and the function behind the dot is what 'this' is doing. So, objectBeingReferenced.function(this)

* 3. New binding - 'this' references the entire new object that is created  in the constructor function. Eg console.log(this), 'this' is referring to the entire new object.

* 4. Explicit binding- can overwrite previously defined 'this' for objects using .call and .apply. this specific overewriting is explicitly binding
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function whatTimeDay(timeofday){
    console.log(this);
    return timeofday;
};
whatTimeDay('Morning');




// Principle 2
// code example for Implicit Binding
const myObj = {
    foodTime: 'time',
    foodgreet: function(food){
        console.log(`Hey, it's ${food} ${this.foodTime}!`)
        console.log(this);
    }
};
myObj.foodgreet('breakfast');



// Principle 3
// code example for New Binding

function breakfastFood(craving) {
    this.hunger = 'starving';
    this.craving = craving;
    this.whine = function(){
        console.log(`Mom i'm ${this.hunger}, can you cook ${this.craving}???`);
        console.log(this); 
    }
}

const monday = new breakfastFood('pancakes');
const tuesday = new breakfastFood('waffles');

monday.whine();
tuesday.whine();




// Principle 4
// code example for Explicit Binding
monday.whine.call(tuesday);