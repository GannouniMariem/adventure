let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let forest = document.getElementById('forest');
let rocks = document.getElementById('rocks');
let water = document.getElementById('water');
let btn = document.getElementById('btn');
let header = document.getElementById('header');
let desc = document.getElementById('desc');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let p = document.getElementById('p');
let img5 = document.getElementById('img5');
let img6 = document.getElementById('img6');
let bgSection2Title = document.getElementById('bgSection2Title');
let bgSection2 = document.getElementById('bgSection2');

window.addEventListener('scroll',function(){
    let value = window.scrollY;

    text.style.top = 50 + value * -0.5 + '%';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';

    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -2 + 'px';

    btn.style.marginTop = value * 1.5 +'px';
    
    rocks.style.top = value * -0.12 +'px';
    
    forest.style.top = value * 0.25 +'px';
    
    header.style.top = value * 0.5 +'px';
    desc.style.top = 100+value *-0.5 + '%';
  
    img1.style.top = 100 + value *-0.2 + 'px';
    img2.style.top = 100 + value *-0.3 + 'px';
    img3.style.top = 100 + value *-0.4 + 'px';
    p.style.top = 100 + value *-0.2 + 'px';
    img5.style.right = value *0.5 -1000 + 'px';
    img6.style.left = value *0.5 -1000 + 'px';
    bgSection2.style.height =  10+ value *0.21 + 'px';
   
})
