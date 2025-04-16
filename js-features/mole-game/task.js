const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");
const gameField = document.getElementById("hole-game");

function clearCounters(){
    deadCounter.textContent = 0;
    lostCounter.textContent = 0;
}

gameField.addEventListener('click',(event) => {
    const target = event.target;
    if(target.classList.contains("hole")){
        
        if(target.classList.contains("hole_has-mole")){
            deadCounter.textContent = Number(deadCounter.textContent) + 1;
        } else{
            lostCounter.textContent = Number(lostCounter.textContent) + 1;
        }
    }

    if(Number(deadCounter.textContent) == 10){
        alert("Вы победили!");
        clearCounters();
    }

    if(Number(lostCounter.textContent) == 5){
        alert("Вы проиграли!");
        clearCounters();
    }
})