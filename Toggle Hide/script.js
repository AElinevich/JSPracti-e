const btn  = document.querySelector('button'),
      content = document.querySelector('.content');

function toggleMenu(){
 content.classList.toggle('content-opened')}
  
 btn.addEventListener('click', toggleMenu)

