const pacman = document.querySelector('.pacman'); 
let left = 0;
let right = 0;

document.addEventListener ('keydown', (event) => {
   if(event.key === 'ArrowLeft'){
      right+= 50;
      pacman.style.right =`${right}px`;
      return; 
   }; 
   
   if(event.key === 'ArrowRight'){
      left+= 50;
      pacman.style.left =`${left}px`;
      return; 
   }; 

}
)