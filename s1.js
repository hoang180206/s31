const nak=document.querySelector('#nak');
const yena=document.querySelector('#yena');
const h1 = document.querySelector('h1');
nak.addEventListener('click',() =>{ 
    h1.style.display = 'none';
});
yena.addEventListener('click',()=>{
    h1.style.display = 'block';
})
