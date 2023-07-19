/*Q1: 
1. Create an array called grades and put the following values: 56, 87, 99, 40
2. Add another element at the end of the array with value: 68
3. Remove the 1st element of the array
4. Change 40 to 60.
5. Create a variable called average and compute for the average of the grades array.
    Tip: you can create another variable as a placeholder for the sum first.
*/
let grades=[56,87,99,40];
grades.push(68);
let a= grades.shift();
console.log(a, "removed from beginning of ", grades);
grades[4]=60;
let lx=0;
let average = 0;
grades.push("Passed");  // part of the curriculum, but does not contribute to the average
for( let x of grades){
    console.log(x);
    if( isNaN(x) ){ continue  ; }
    average+=x; 
    lx++; 
}
average=average/lx ;
console.log("Average grade is ", average , "<br/>") ;




/*Q2:
1. Create an object called vehicle with following properties:
    a. name (String)
    b. brand (String)
    c. year of make (Number)
    b. number of wheels (Number)
    e. isEnvironmentFriendly (Boolean)
Feel free to put any value.
2. Use the for-in loop to display both the properties and values of the object.
*/
let vehicle  = {name: "Lancer", brand:"Mitsubishi", year_of_make: 2013 , number_of_wheels : 4 , isEnvironmentFriendly: false}
const vehicles =[] ;
vehicles.push(  vehicle , {name: "eGolf", brand:"VW", year_of_make: 2017 , number_of_wheels : 4 , isEnvironmentFriendly: true} );    
vehicles.push({name: "Prius", brand:"Toyota", year_of_make: 2007 , number_of_wheels : 4 , isEnvironmentFriendly: true});
for( let car of vehicles){
    console.log(" ---------------");
    console.log(car)    ;
    console.log(JSON.stringify(car))  ; 
    for ( var x in car){
        console.log( x , car[x]);
    }
    
       

}