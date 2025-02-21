
// const button = document.querySelector(".proBtn"),
//     text = document.querySelector(".text");
// button.addEventListener("click", () => {
//     button.classList.add("progress");
//     text.innerText = "Downloading...";
//     setTimeout(() => {
//         button.classList.remove("progress"); //remove progress after 6s
//         text.innerText = "Open";
//     }, 5000); //1000ms = 1s (6000 = 6s)
// });

const button = document.querySelector(".proBtn"),
    text = document.querySelector(".text");
let isClicked = false;

button.addEventListener("click", () => {
    if (!isClicked) {
        isClicked = true;
        button.classList.add("progress");
        text.innerText = "Downloading...";
        setTimeout(() => {
            button.classList.remove("progress"); //remove progress after 6s
            text.innerText = "Open";
        }, 5000); //1000ms = 1s (6000 = 6s)
    }
});