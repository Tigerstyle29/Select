/*function fun1() {
    let sel = document.getElementById('mySelect').selectedIndex; 
    let options = document.getElementById('mySelect').options;
    alert('Выбрана опция ' + options[sel].text);
}
*/

// JS ползунка 
function fun1() {
    let rng = document.getElementById('r1');
    let div = document.getElementById('test');
    div.style.width=rng.value + 'px';
}