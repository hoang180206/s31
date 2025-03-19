let nak=document.querySelector('#nak');
let yena=document.querySelector('#yena');
let h1 = document.querySelector('h1');
nak.addEventListener('click',() =>{ 
    h1.style.display = 'none';
});
yena.addEventListener('click',()=>{
    h1.style.display = 'block';
})
