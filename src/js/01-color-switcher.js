const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const bodyColorEl = document.querySelector("body");

let timerId = null;

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        bodyColorEl.style.backgroundColor = getRandomHexColor();
    }, 1000);

    startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false;
});


//------------------------------------------------------------------------------------------------------


// const startBtn = document.querySelector("[data-start]");
// const stopBtn = document.querySelector("[data-stop]");
// const bodyColorEl = document.querySelector('body');

// const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

// const swicher = {
//     intervalID: null,
//     // isActive: false,
//     start() {
//         // if (this.isActive) {
//         //     return;
//         // };
//         // this.isActive = true;
//             startBtn.disabled = true;

//         this.intervalId = setInterval(() => {
//             console.log("New colour!");
//             bodyColorEl.style.backgroundColor = getRandomHexColor();
//         }, 1000);
//     },

//     stop() {
//         clearInterval(this.intervalID);
//      // this.isActive = false;
//         startBtn.disabled = false;
//         console.log(`Swicher has stopped!`);
//     }
// };

// startBtn.addEventListener("click", () => {
//     swicher.start()
// });

// stopBtn.addEventListener("click", () => {
//     swicher.stop()
// });
