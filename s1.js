const button=document.querySelector('#myButton');
const button1=document.querySelector('#myButton1');
const div = document.querySelector('h1');
button.addEventListener('click',() =>{ 
    div.style.display = 'none';
});
button1.addEventListener('click',()=>{
    div.style.display = 'block';
})