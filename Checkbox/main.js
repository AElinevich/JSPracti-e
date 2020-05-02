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
