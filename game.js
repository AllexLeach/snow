const display = document.getElementById('display');

function getRandom(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min);
};

function getRandomNoRaund(min, max) {
   return (Math.random() * (max - min) + min);
};

function snow() {
   let rand = getRandom(60, 80);
   let counter = 0;
   for(let i = 0; i <= rand; ++i) {
      display.innerHTML += `<div class="snowflake" id="snow${i}"></div>`;
      counter += 1;
   };
   return counter
};

document.getElementById('snow').onclick = function () {
   let counter = snow();
   for(let a = 0; a < counter; ++a) {
      document.querySelector(`#snow${a}`).style.setProperty('--animation-snowflake', `${getRandom(1, window.innerWidth)}px`);
      document.querySelector(`#snow${a}`).style.setProperty('--snowflake-size', `${getRandom(15, 25)}px`);
      document.querySelector(`#snow${a}`).style.setProperty('--animation-delay', `${getRandomNoRaund(0, 10)}s`);
      document.querySelector(`#snow${a}`).style.setProperty('--animation-duration', `${getRandomNoRaund(5, 15)}s`);
   };
   console.log(counter);
};