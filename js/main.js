const pacman = document.querySelector('.pacman'); 
let left = 0;

window.addEventListener ('load', () => {
   pacman.style.position = 'absolute';

} );

document.addEventListener ('keydown', (event) => 
{
   if(event.key === 'ArrowRight')
      {
         left+= 50;
         pacman.style.left =`${left}px`;
      }
   else if(event.key === 'ArrowLeft')
      { left-= 50;
       pacman.style.left =`${left}px`;
      }   
}
);