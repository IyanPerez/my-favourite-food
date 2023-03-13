const pizzaCbox = document.getElementById("cbox1");
const pizzaCboxQuery = document.querySelectorAll(".cbox");
const ovenCbox = document.getElementById("cbox2");
const respectCbox = document.getElementById("cbox3");
const startCookingBtn = document.getElementById("start-timer");


startCookingBtn.addEventListener("click", () => {
    showTimer();
})

const prepSection = document.getElementById("preparation-container");
const timeSection = document.getElementById("time-container");


function showTimer(){
    if (timeSection.style.display = "none") {
        timeSection.style.display = "block"
    }
}




