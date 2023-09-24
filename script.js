const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav(){
    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}
// let main = document.querySelector('#main')

// let element = document.createElement('p');

// let elText  = document.createTextNode('Welcome to my website');

// element.append(elText);

// main.append(element);

// console.log(element);


// let btn = document.querySelector('button');

// btn.addEventListener('mouseover', ()=> {
//     document.body.style= 'background: red';
// })
// btn.addEventListener('mouseleave', ()=> {
//     document.body.style= 'background: #fff';
// })



let typing = document.querySelector("#typing");
let clone = document.querySelector("#clone")

// typing.addEventListener("keypress", ()=>{
//     clone.innerHTML=typing.value;
// })

typing.addEventListener("keyup", (e) =>{
    console.log(e.key);
})