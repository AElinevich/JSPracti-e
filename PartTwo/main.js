// Progress Bar
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
}*/

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