// Progress Bar
/*
let btn = document.querySelector("#btn");
btn.addEventListener('click', function move() {
    let myBar = document.querySelector("#myBar"),
        width = 10,
        id = setInterval(frame, 10);
           function frame() {
            if(width >= 100) {
                clearInterval(id);
            } else {
                width++;
                myBar.style.width = width + '%';
                document.querySelector('#label').innerHTML = width*1 +'%';
            
            }

           }    
        })
  // Popup
  function myFunc() {
  let popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
  };
// Accordion
/*let acc = document.getElementsByClassName("accordion");
for (let i=0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");

    }
}


let acc = document.querySelectorAll(".accordion"),
panel = document.querySelectorAll(".panel");
for (let i=0; i < acc.length; i++) {
    acc[i].addEventListener ('click', function() {
        acc[i].classList.toggle("active");
        panel[i].classList.toggle("show");

    })
}

// Money Converter
function moneyConverter(valNum) {
    document.getElementById("outputrub").innerHTML=valNum*2.49;
}
*/
// To do List
let myNodeList = document.getElementsByTagName('LI');
for (let i=0; i < myNodeList.length; i++) {
    let span = document.createElement("SPAN"),
        txt = document.createTextNode("\u00D7");
        span.className="close";
        span.appendChild(txt);
        myNodeList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");

for (let i=0; i < close.length; i++) {
close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
}}
let list = document.querySelector('ul');
list.addEventListener('click', function(ev)
{
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    let li = document.createElement("li"),
        inputValue = document.getElementById("myInputt").value,
        t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert('Поле не может быть пустым');
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    
}