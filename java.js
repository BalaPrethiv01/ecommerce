const bar=document.getElementById('bar');
const close= document.getElementsById('close');
const nav= document.getElementsById('navbar');

if(bar){
    bar.addEventListener('click',() =>{
        nav.classlist.add('active');
    }) 
}

if(close){
    close.addEventListener('click', () =>{
        nav.classlist.remove('active');
    })
}

