document.addEventListener('DOMContentLoaded',(e)=>{
    console.log('Rock and roll!!');

    const even = document.querySelector('.emailInput');
    even.addEventListener('input', (event) => {
    console.log(event.target.value);
});

});

const calculateScrollPercent = (docE) => {
    let scrollTop = docE.scrollTop
    let scrollHeight = docE.scrollHeight;
    let clientHeight = docE.clientHeight;
    return (((scrollTop)/(scrollHeight-clientHeight)) * 100);
};
document.addEventListener('scroll', (e)=> {
    let ribbon = document.querySelector('.scrollRibbon');
    ribbon.style.width = `${calculateScrollPercent(e.target.documentElement)}%`;
});

