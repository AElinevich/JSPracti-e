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