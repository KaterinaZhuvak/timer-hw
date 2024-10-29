//? Task 1
let totalTime = 3600;
const timerElement = document.getElementById("timer");
const messageElement = document.getElementById("message");
const startTimer = () => {
  const interval = setInterval(() => {
    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor((totalTime % 3600) / 60);
    let seconds = Math.floor(((totalTime %3600) % 60) % 60)
    timerElement.textContent = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    if (totalTime === 1800) {
        alert("Залишилось менше половини часу!")
    }
    totalTime--;
    if (totalTime === 0) {
      clearInterval(interval);
      timerElement.textContent = "Час вийшов!";
    }
  }, 1000);
};
startTimer();

//Task 2
let totalTime2 = 15000
const milisecondsElement = document.querySelector("#miliseconds")
const startButton = document.getElementById("startButton")
const startMiliseconds =()=>{
    startButton.disabled = true;
    const intervalID = setInterval(()=>{
        let seconds = Math.floor(totalTime2 / 1000)
        let miliseconds = Math.floor(totalTime2 % 1000 )
        milisecondsElement.textContent = `${String(seconds).padStart(2, "0")}:${String(miliseconds).padStart(2, "0")}`;
        if (totalTime2 <= 10000) { // 10 секунд = 10000 мс
            milisecondsElement.classList.add("animate");
        }
        totalTime2--;
        if (totalTime2 < 0) {
            clearInterval(intervalID);
            milisecondsElement.classList.remove("animate");
            milisecondsElement.textContent = "00:00.000";
            startButton.disabled = false; // Активуємо кнопку "Почати знову"
        }
    },)
}
startMiliseconds()