console.log('hellooo :)')
document.addEventListener('DOMContentLoaded', function(e){
    console.log('helllllooooo')
    let my_h1 = document.querySelector('h1');
    console.log(my_h1.innerText);
    my_h1.innerText = "Absolutely amazing and great"



    let ul = document.querySelector('ul');

    for(let i = 0, i < 5, i++ ){
        let newLi = document.createElement('li');
        newLi.innerText = "new here!!!!"
        ul.appendChild(newLi);
    }
});