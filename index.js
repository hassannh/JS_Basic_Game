const moleImages = document.querySelectorAll('.mole');


 

function toggleNextMole() {
  
  let randomindex = Math.floor(Math.random() * moleImages.length);

  console.log(randomindex);


  function hideMole() {
    moleImages[randomindex].classList.toggle("hide");
 }
  setTimeout(()=> {


    moleImages[randomindex].classList.toggle("hide");

  },500)


  function AddWormPart() {
    
  
   
    wormWidth.addEventListener("click", function() {

      console.log("dfghjklkjhgfds");
      
      if (moleImages[randomindex].src === './mole-game/king-fed.png') {
        
        wormWidth.classList.add("addPart");

        
      }
    });
  }
  
  function updateScore() {
    let wormWidth = document.getElementById("worm_width");
    console.log("dhhj");
      wormWidth.style.width += 10
  }

  
  

  


  moleImages[randomindex].addEventListener('click', function() {

    if (moleImages[randomindex].src === './mole-game/king-fed.png') {
      
      
        moleImages[randomindex].src = './mole-game/king-leaving.png';

    } else {
        moleImages[randomindex].src = './mole-game/king-fed.png';
        updateScore()
    }

});



  



}

setInterval(toggleNextMole, 500);



const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {

    // Update the custom cursor position to match the mouse pointer
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});




 