//es-6 
// Array spreading / Destructuring

let names = [ 'Elvis', 'Sree', 'Sandra'];
let moreNames = [ 'velvel', 'john', 'elton'];

// let newA = [];

// for (let i=0; i<names.length; i++) {
//     newA.push(names[i])
//     newA.push(moreNames[i])
// };

// console.log(newA);

// This is called a spreading operator
let newArray = [...names, ...moreNames];
console.log(newArray)





// this is called array destructuring
// let el = names[0];
// let sr = names[1];
// Js is smart enough to know that the first value in the array is the index position 0 in the names array
// let [e,s] = names;
// console.log(e); = this will print elvis because that is the name as index position 0 in the names array


// object spreading / destructuring
let info = {
    id: '1234',
    fname: 'velvel'
}
// // passby value/reference
// let a = {name: 'yo'};
// // line 40 passes an address: NOT A VALUE
// let b = a;
// let contactInfo = {
//     phone: '1234123t1234', 
//     email: 'qwerty',
//     personalInfo: {... info} 
// }


// let myInfo = {
//     phone: '1234123t1234', 
//     email: 'qwerty',
//     personalInfo: {... info} 
// }
// // Youre able to assign these variables to myInfo
// const {phone, email,personalInfo} = myInfo;
// // console.log(phone)


// let data = {
//     phone
// }
// console.log(data)


//object with fun. expression 

let value = {
    data: 'elis',
}


// object spreading (... name) (if there is a multi layer object the spreading will not catch the multi layers and will have the reference problem: both variables will belong only to 1 variable and not to 2 variables )
// object destructuring const {phone, personInfo} 