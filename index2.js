const holes = document.querySelectorAll('.hole');

let Score = document.querySelector(".worm_width");

let Scoore = 0;

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

          console.log(Score);

          Scoore += 10;
          Score.style.width = Scoore + "%";
        }


        if (Score === 100) {
           
            var imageElement = document.createElement("img");

            imageElement.src = "./mole-game/win.png"; 
            
            var imageContainer = document.getElementById("finish");
            imageContainer.appendChild(imageElement);
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







setInterval(spawnMole,2000);


