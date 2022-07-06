const pacman = document.querySelector('.pacman'); 
let left = 0;
let right = 0;

window.addEventListener ('load', () => {
   pacman.style.position = 'absolute';


} );

document.addEventListener ('keydown', (event) => {
   if(event.key === 'ArrowLeft'){
      right+= 50;
      pacman.style.right =`${right}px`;
   
   }   else(event.key === 'ArrowRight')
         right-= 50;
         pacman.style.right =`${right}px`;
         console.log(event);
   }
)