// // numbers
// let aNumber = 10;
// //reassigns variable to another nubmer in the next line
// aNumber = 90;
// const aFloatingPointNumber = 3.1415;

// //strings
// aString = "hi world";
// anotherString = "hi worldd";

// // boolean
// aTrue =true;
// aFalse = !aTrue;

// //null (empty value)
// nullValue = null;

// // arrays
// let aEmptyArray = [];
// let daysOfWeek = ['sunday', 'monday'];
// let mixedArray = [2,3,null,true, [], 'monday'];
// // printing in java script 
// console.log(daysOfWeek);
// console.log(daysOfWeek[0]);
// console.log(mixedArray.length);

// // Objects (this is called an object literal)
// let anObject = {
//     firstName: 'elvis', 
//     lastName: 'peter',
// };

// //access particular value
// console.log(anObject.firstName)
// console.log(anObject['firstName'])

// //string interpolation
// console.log('hi I am ' + anObject.firstName)
// // you have to use back ticks
// console.log(`hi I am ${anObject['firstName']}`)


// // creating a method in js
// // you have to have parenthesis even if you dont have an argument to pass in
// function simpleForLoop(argument) {
//     // the function body has to be here
//     // if you want to return somehting you have to write keyword return
//     return ('hi')
// }

// // to invoke a function 
// simpleForLoop();

// // Loop
// for(let i = 0; i < 9; i++ ){
//     console.log(i)
// }


// // a.push(1) is a push method in js

// // while loop
// while(condition){
//     //body
// }

// counter = 0
// while(counter != 10) {
//     console.log('While_Loop:::', counter);
//     counter = counter + 1;
// }

// do while  loop
// this is an exit control loop: condition is executed after loop
// do{
//     console.log('Do while loop::::');
// } while(false)
 
//anonymoun function is without a name and you can assign it to a variable
// let a = function () {
//     console.log("hi world");
// };
// //this is how  you call an anonymous function
// a();
//========= Higher Order Array func= .each, .map, .sort, .filet===========

//for each (each loop in ruby) - this argument wants to reference the method(line 94) and not to invoke the function name
//function reference is console.log(function_name)
// let data = ['sunday', 'monday', 'tuesday', 'wendsday', 'thursday', 'friday'];

// data.forEach(function(element, index){
//     console.log(index, element)
// });

// mapping - this creates a new array
// let num = [1,2,3,4,5,6,7,8,9]
// let res = [1,3,3,5,5,7,7,9,9]

// let finalResult = num.map(function(element){
//     if(element % 2 == 0) {
//         return element + 1
//     }
//     return element;
// });
// console.log(finalResult)

// let data = ['apple', 'oranges', 'pears']
// console.log(data.sort());

// let points = [50,40,60]
// console.log(points.sort(function(a,b){
//     return a + b;
// }));


//filter = creates a new array while throwing out the rest of the values that do not satisfy the neccesary condition
// let points = [50,55,40,60]
// console.log(points.filter(function(element){
//     return element % 2 == 0
// }));

const points = [40, 40009, 70, 234,5]
let final = points.sort(function(a,b){
    return b-a;
}).map(function(e,i){
    return {
    value: e,
    index: i, 
    isEven: e % 2 == 0
    }  
}).filter(function(e) {
    return e.isEven
}).map(function(x){
    return x.value;
})

console.log(final)
