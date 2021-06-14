//IMPORTANT-------ARROW FUNCTION -----------

function hello () {
    return 'hello world'
};

const hello2 = () => {
    return 'hello world'
};

const points = [40, 100, 1, 5, 25, 10];
// const even = points.filter(function(e){
//     return e % 2 == 0
// });

const even = points.filter((e) => e%2 == 0); 


const data = [
    {name: 'Elvis'},
    {name: 'elton'},
    {name: 'sree'},
    {name: 'abraham'},
    {name: 'gemer'},
]

const lengthFive = data.filter(e => e.name.length == 5)
            .map(e => {
                return {
                    ...e,
                    length: 5
                };
            });

console.log(lengthFive);
