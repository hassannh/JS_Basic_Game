
const moleImages = document.querySelectorAll('.mole');
let currentIndex = 0; 


function toggleNextMole() {
  
  let randomindex = Math.floor(Math.random(10) * 10);

  console.log(randomindex);

  moleImages[randomindex].style.display = "none";

  setTimeout(()=> {


  moleImages[randomindex].style.display = "block";

  },1000)
}

setInterval(toggleNextMole, 1000);




const customCursor = document.querySelector('.custom-cursor');

// Listen for mousemove events on the document
document.addEventListener('mousemove', (e) => {
    // Update the custom cursor position to match the mouse pointer
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});

 