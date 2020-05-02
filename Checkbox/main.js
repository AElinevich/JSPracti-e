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