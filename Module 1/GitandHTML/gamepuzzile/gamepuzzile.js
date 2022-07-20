const win_1 = "http://127.0.0.1:5500/Module%201/GitandHTML/gamepuzzile/image/1.1.jpghttp://127.0.0.1:5500/Module%201/GitandHTML/gamepuzzile/image/1.2.jpghttp://127.0.0.1:5500/Module%201/GitandHTML/gamepuzzile/image/1.3.jpghttp://127.0.0.1:5500/Module%201/GitandHTML/gamepuzzile/image/1.4.jpghttp://127.0.0.1:5500/Module%201/GitandHTML/gamepuzzile/image/1.5.jpg";
const win_2 = "http://127.0.0.1:5500/Module%201/GitandHTML/gamepuzzile/image/2.1.jpghttp://127.0.0.1:5500/Module%201/GitandHTML/gamepuzzile/image/2.2.jpghttp://127.0.0.1:5500/Module%201/GitandHTML/gamepuzzile/image/2.3.jpghttp://127.0.0.1:5500/Module%201/GitandHTML/gamepuzzile/image/2.4.jpghttp://127.0.0.1:5500/Module%201/GitandHTML/gamepuzzile/image/2.5.jpg";
const win_3 = "http://127.0.0.1:5500/Module%201/GitandHTML/gamepuzzile/image/3.1.jpghttp://127.0.0.1:5500/Module%201/GitandHTML/gamepuzzile/image/3.2.jpghttp://127.0.0.1:5500/Module%201/GitandHTML/gamepuzzile/image/3.3.jpghttp://127.0.0.1:5500/Module%201/GitandHTML/gamepuzzile/image/3.4.jpghttp://127.0.0.1:5500/Module%201/GitandHTML/gamepuzzile/image/3.5.jpg";
const min = 1
const max = 3
function changeimage(row){
let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let img3 = document.querySelector('#img3');
let img4 = document.querySelector('#img4');
let img5 = document.querySelector('#img5'); 
let imgageId = Math.floor(Math.random()* (max - min + 1) + min);

let imageName = `${imgageId}.${row}.jpg`;

document.querySelector(`#img${row}`).src=`image/${imageName}`;
let checkWin = img1.src + img2.src + img3.src + img4.src + img5.src;
if(checkWin == win_1 || checkWin == win_2 || checkWin == win_3){
    document.getElementsByTagName("table")[0].classList.add('lebaloc');
}
else{
    document.getElementsByTagName("table")[0].classList.remove('lebaloc');
}
}