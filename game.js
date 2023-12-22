const display = document.getElementById('box');
const giftBox = document.querySelector('.display');
const gift = document.querySelector('.gift');
const box = document.querySelector('.box');
const hat = document.querySelector('.hat');
let counter = snow();

const ctxBox = box.getContext("2d");
const ctxHat = hat.getContext("2d");
const src = {
   1: "https://sun9-26.userapi.com/impg/IREIOev2wxpw0rr0ByU8xI_ctn99yGBPE49Aow/y_sFgok4AHw.jpg?size=1280x866&quality=95&sign=2a0c23ed73cc7c0e3561e0c78f244b3c&c_uniq_tag=KT6KInpgeXSLqOR-pwJPxucBcEpNA5GG_RzHAVuKgMQ&type=album", 
   2: "https://i.ytimg.com/vi/t9BMHH0UTyw/maxresdefault.jpg", 
   3: "https://otvet.imgsmail.ru/download/2cef7d09422bedc7c818e830ad9cd115_i-1.jpg", 
   4: "https://risovach.ru/upload/2014/08/mem/chernyj-vlastelin_58281895_orig_.jpg5aa89dd&c_uniq_tag=S47Sxo0aDT5yPUpIUwv7F_HdfZsvhawlSQ8VcBqRtQw&type=album", 
   5: "https://i.pinimg.com/736x/ab/23/be/ab23be11783914dc875c67d6fd3fd4c3.jpg", 
   6: "http://pm1.aminoapps.com/8034/1559aadd1667ce6a729452f24437e0690b2ba862r1-2048-2048v2_uhq.jpg"
};

function bows() {
   ctxHat.beginPath();
   ctxHat.strokeStyle = '#f2f2f2';
   ctxHat.lineWidth = 12.5;
   ctxHat.moveTo(hat.width/2, 50);
   ctxHat.bezierCurveTo(hat.width/2-25, -5, hat.width/2-100, 25, hat.width/2, 50);
   ctxHat.bezierCurveTo(hat.width/2+25, -5, hat.width/2+100, 25, hat.width/2, 50);
   ctxHat.fill();
   ctxHat.stroke();
};

function randerBox() {
   ctxBox.fillStyle = 'rgb(255, 61, 84)';
   ctxBox.fillRect(0 , 0, box.width, box.height);
   ctxBox.fillStyle = '#f2f2f2';
   ctxBox.fillRect(box.width/2-20, 0, 40, box.height);
};

function randerHat() {
   ctxHat.fillStyle = 'rgb(255, 61, 84)';
   ctxHat.fillRect(0 , 50, hat.width, 50);
   ctxHat.fillStyle = '#f2f2f2';
   ctxHat.fillRect(hat.width/2-20, 50, 40, hat.height);

   ctxHat.beginPath();
   ctxHat.strokeStyle = '#f2f2f2';
   ctxHat.moveTo(hat.width/2-20, 50);
   ctxHat.lineTo(hat.width/2-60, 80);
   ctxHat.lineTo(hat.width/2-45, 80);
   ctxHat.lineTo(hat.width/2-45, 95);
   ctxHat.lineTo(hat.width/2, 50);
   ctxHat.moveTo(hat.width/2-20, 50);
   ctxHat.lineTo(hat.width/2, 50);

   ctxHat.moveTo(hat.width/2+20, 50);
   ctxHat.lineTo(hat.width/2+60, 80);
   ctxHat.lineTo(hat.width/2+45, 80);
   ctxHat.lineTo(hat.width/2+45, 95);
   ctxHat.lineTo(hat.width/2, 50);
   ctxHat.moveTo(hat.width/2+20, 50);
   ctxHat.lineTo(hat.width/2, 50);
   ctxHat.stroke();
   ctxHat.fill();

   bows();
};

// рандомчик :)
function getRandom(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min);
};

// рандом без округления
function getRandomNoRaund(min, max) {
   return (Math.random() * (max - min) + min);
};

// добавляем снежинки
function snow() {
   let rand = getRandom(60, 80);
   let counter = 0;
   display.innerHTML = '';
   for(let i = 0; i <= rand; ++i) {
      display.innerHTML += `<div class="snowflake" id="snow${i}"></div>`;
      counter += 1;
   };
   return counter;
};

// меняем стили для каждой снежинки
for(let a = 0; a < counter; ++a) {
   document.querySelector(`#snow${a}`).style.setProperty('--animation-snowflake', `${getRandom(1, window.innerWidth)}px`);
   document.querySelector(`#snow${a}`).style.setProperty('--snowflake-size', `${getRandom(15, 25)}px`);
   document.querySelector(`#snow${a}`).style.setProperty('--animation-delay', `${getRandomNoRaund(0, 10)}s`);
   document.querySelector(`#snow${a}`).style.setProperty('--animation-duration', `${getRandomNoRaund(5, 15)}s`);
};

document.getElementById('snow').onclick = function () {
   giftBox.innerHTML = `<div class="giftiks"><img src="${src[getRandom(1,6)]}"></div>`;
   gift.className = 'gift_active';
   document.documentElement.style.setProperty('--innerWidth', `${window.innerWidth/2-150}px`);
   document.documentElement.style.setProperty('--innerHeight', `${window.innerHeight/2-150}px`);
   console.log('ee');
};

document.documentElement.style.setProperty('--widthBox', `${window.innerHeight/6}px`);
document.documentElement.style.setProperty('--heightBox', `${window.innerHeight/12}px`);
document.documentElement.style.setProperty('--widthHat', `${window.innerHeight/6-12.5}px`);
document.documentElement.style.setProperty('--heightHat', `${window.innerHeight/12-32.5+200}px`);

randerBox();
randerHat();
