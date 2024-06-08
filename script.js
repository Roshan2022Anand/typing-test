const p = document.getElementById("type");
const dialogBox = document.getElementById("click");
const show = document.getElementById("showResult");
const wordList = [
    "apple", "orange", "grape", "mango",
    "red", "green", "blue", "yellow", "purple",
    "happy", "sad", "angry", "excited", "calm"
];
const letter = wordList.join(" ".split(""));
const addSpanArr = [];
let count = 0;
let sec = 0;

for (let i = 0; i < letter.length; i++)
    addSpanArr[i] = `<span>${letter[i]}</span>`

const time = () => {
    setInterval(() => {
        sec++;
    }, 1000);
}

const result = () => {
    clearInterval(time)
    show.innerText = `SCORE : ${sec} second`;
}

dialogBox.addEventListener("click", () => {
    document.addEventListener("keydown", (keyPress) => {
        let input = p.children[count].innerText;
        if (count == 0) time();
        else if (count == letter.length-1){
            p.children[count-1].classList.remove("loc");
            p.children[count].classList.add("loc");
            result();
            return;
        } 
        if (keyPress.key == input && count <= letter.length - 1) {
            p.children[(count==0)?0:count-1].classList.remove("loc");
            p.children[count++].classList.add("loc");
        } else p.children[count].style.color = "red";

    });

    dialogBox.close();
})
p.innerHTML = addSpanArr.join("");
p.children[count].classList.add("loc");

