//ChECKBOX
function funcOne () {
const checkbox = document.getElementById('one');
console.log(one);

if (checkbox.checked) {
    console.log('Выбран');
} else {
    console.log('Не выбран');

}};
// RADIO BUTTON
function funcTwo() {
    const radioBtn = document.getElementsByName('r1');
    for(let i = 0; i < radioBtn.length; i++) {
        if(radioBtn[i].checked) {
            console.log('Выбран ' + i + ' элемент');
        }
    }
    
}
// SELECT 
function funcThree() {
const sel = document.getElementById('mySelect').selectedIndex;
const options = document.getElementById('mySelect').options;
console.log('Выбрана опция ' +options[sel].text);
}

// RANGE
function funcFour() {
    let range = document.getElementById('r2'),
    i1 = document.getElementById('i1');
    i1.value = range.value;
}

// CSS-generator
function funcFive() {
    let rtl=document.getElementById('rtl').value,
    ttl=document.getElementById('ttl'),
    rtr=document.getElementById('rtr').value,
    ttr=document.getElementById('ttr'),
    rbr=document.getElementById('rbr').value,
    tbr=document.getElementById('tbr'),
    rbl=document.getElementById('rbl').value,
    tbl=document.getElementById('tbl'),
    block=document.getElementById('block');

    ttl.value=rtl;
    ttr.value=rtr;
    tbr.value=rbr;
    tbl.value=rbl;

    block.style.borderRadius=rtl+'px ' +rtr +'px '+rbr +'px ' +rbl+'px ';


}

// ВЫПАДАЮЩЕЕ МЕНЮ
document.getElementById('nav').onmouseover = function(event) {
    let target = event.target;
    if(target.className == 'menu-item') {
        let s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display='block';

    }
}
document.onmouseover = function (event) {
    let target = event.target;
    console.log(event.target);
    if(target.className !='menu-item' && target.className !='submenu') {
        closeMenu();
    }
}
function closeMenu() {
    let menu = document.getElementById('nav'),
        subm = document.getElementsByClassName('submenu');
        for (let i=0; i < subm.length; i++) {
            subm[i].style.display="none";
        }
};

// TABS 
window.onload = function() {
    tabContent = document.getElementsByClassName('tabContent'),
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}
function hideTabsContent(a) {
    for (let i=a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function (event) {
    let target = event.target;
    if (target.className == 'tab') {
        for (let i=0; i<tab.length; i++) {
            if(target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}
function showTabsContent(b) {
    if(tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');

    }
}