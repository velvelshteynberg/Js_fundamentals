document.addEventListener('DOMContentLoaded',(e)=>{
    console.log('Rock and roll!!');

    const even = document.querySelector('.emailInput');
    even.addEventListener('input', (event) => {
    console.log(event.target.value);
});

});

const CalculateScrollPercent = (docE) => {
    const {scrollTop, scrollHeight, clientHeight} = docE;
    console.log(scrollTop, scrollHeight, clientHeight);
    return 100;
};

document.addEventListener('scroll', (e)=> {
    console.log(e.target.documentElement.scrollTop);
});

