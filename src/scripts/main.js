let pizzaCbox1 = document.getElementById("cbox1");
let pizzaCbox2 = document.getElementById("cbox2");
let pizzaCbox3 = document.getElementById("cbox3");

function check() {
  if (
    pizzaCbox1.checked == true &&
    pizzaCbox2.checked == true &&
    pizzaCbox3.checked == true
  ) {
    showPrepSection();
  } else
    alert(
      "Seems like you´re not even capable of gathering three simple things..."
    );
}

let prepSection = document.getElementById("preparation-time-container");
let readyBtn = document.getElementById("ready-btn");

readyBtn.addEventListener("click", () => {
  check();
});

function showPrepSection() {
  if ((prepSection.style.display = "none")) {
    prepSection.style.display = "block";
  }
}

let timeSection = document.getElementById("time-container");
let startCookingBtn = document.getElementById("start-timer");

startCookingBtn.addEventListener("click", () => {
  showTimer();
});
function showTimer() {
  if ((timeSection.style.display = "none")) {
    timeSection.style.display = "block";
  }
}

let Btn1 = document.getElementById("1-btn");
let Btn2 = document.getElementById("2-btn");
let Btn3 = document.getElementById("3-btn");
let stepTitle = document.getElementById("step-title");
let stepText = document.getElementById("step-text");

Btn1.addEventListener("click", () => {
  Text1();
});

function Text1() {
  stepTitle.innerHTML = "Lorem 1";
  stepText.innerHTML =
    "Lorem 1 Lorem 1 Lorem 1, ipsum dolor sit amet consectetur adipisicing elit. Ut quidem dolore a tempora, architecto repellendus, excepturi labore sapiente accusantium accusamus cupiditate aliquid temporibus maiores necessitatibus saepe perferendis cum esse quas quia, atque error animi sequi odit dolorem. Eum doloremque fuga et ea veniam? Blanditiis vel vitae saepe provident quibusdam totam.";
}

Btn2.addEventListener("click", () => {
  Text2();
});

function Text2() {
  stepTitle.innerHTML = "Lorem 2";
  stepText.innerHTML =
    "Lorem 2 Lorem 2 Lorem 2, ipsum dolor sit amet consectetur adipisicing elit. Ut quidem dolore a tempora, architecto repellendus, excepturi labore sapiente accusantium accusamus cupiditate aliquid temporibus maiores necessitatibus saepe perferendis cum esse quas quia, atque error animi sequi odit dolorem. Eum doloremque fuga et ea veniam? Blanditiis vel vitae saepe provident quibusdam totam.";
}

Btn3.addEventListener("click", () => {
  Text3();
});

function Text3() {
  stepTitle.innerHTML = "Lorem 3";
  stepText.innerHTML =
    "Lorem3 Lorem 3 Lorem 3, ipsum dolor sit amet consectetur adipisicing elit. Ut quidem dolore a tempora, architecto repellendus, excepturi labore sapiente accusantium accusamus cupiditate aliquid temporibus maiores necessitatibus saepe perferendis cum esse quas quia, atque error animi sequi odit dolorem. Eum doloremque fuga et ea veniam? Blanditiis vel vitae saepe provident quibusdam totam.";
}
