let interval = null;

function stopTimer(){
    clearInterval(interval);
}

const timer = document.getElementById("timer");
interval = setInterval( () => {

    const time = Number(timer.textContent) - 1;
    timer.textContent = time;
    if (time == 0){
        alert("Вы победили в конкурсе!");
        stopTimer();
    }
}, 1000)