const holes = document.querySelectorAll('.hole');

function spawnMole() {
    const holeIndex = Math.floor(Math.random() * holes.length)

    const mole = document.createElement("img")

    mole.classList.add("mole")

    mole.src = "./mole-game/hungry.png"
    
    const hole = holes[holeIndex]

    let birdState = 'hungry'

    hole.appendChild(mole)

    mole.addEventListener('click',()=>{

        if (birdState === 'hungry') {

            birdState = 'fed'

          mole.src = "./mole-game/fed.png"


        }


    })



  





    setTimeout(()=>{
        if (birdState === 'hungry') {
            birdState = 'sad'
          mole.src = "./mole-game/sad.png"

        }


    },1000)

    setTimeout(()=>{
        mole.src = "./mole-game/leaving.png"

    },1500)

    setTimeout(()=>{

        mole.remove()

    },2000)

}


function updateScore() {
    let wormWidth = document.getElementById("worm_width");
    console.log("dhhj");
      wormWidth.style.width += 10
  }




setInterval(spawnMole,1000);

updateScore();
