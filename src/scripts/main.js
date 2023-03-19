// const pizzaCboxQuery = document.querySelectorAll(".cbox");
let pizzaCbox1 = document.getElementById("cbox1");
let pizzaCbox2 = document.getElementById("cbox2");
let pizzaCbox3 = document.getElementById("cbox3");

function check(){
    if (pizzaCbox1.checked==true && pizzaCbox2.checked==true && pizzaCbox3.checked ==true) {
        showPrepSection();
    }
}



let prepSection = document.getElementById("preparation-time-container");
let readyBtn = document.getElementById("ready-btn");

readyBtn.addEventListener("click",() => {
    check();
    console.log(prepSection);
}) 

function showPrepSection(){
    if (prepSection.style.display = "none") {
        prepSection.style.display = "block"
    }
}
// showPrepSection();







let timeSection = document.getElementById("time-container");
let startCookingBtn = document.getElementById("start-timer");

startCookingBtn.addEventListener("click", () => {
    showTimer();
})
function showTimer(){
    if (timeSection.style.display = "none") {
        timeSection.style.display = "block"
    }
}


// function checkIngredient() {
//     pizzaCboxQuery.forEach(ingredient => {
//         if (ingredient.checked == true) {
//             console.log(ingredient.value);
//         }
//     });
// }
