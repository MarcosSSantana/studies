const elementos = [
    "🍕", "🍕", "🥗", "🥗", "🧀", "🧀", "🍗", "🍗", "🥨", "🥨", "🍿", "🍿", "🍣", "🍣", "🍩", "🍩"
];
let openCards = [];

let shuffleElements = elementos.sort(() => {
    return Math.random() > 0.5 ? 2 : -1;
});

// console.log(shuffleElements);

shuffleElements.forEach((item) => {
    // console.log(item);
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = item;
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
});

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);

    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500)
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length == elementos.length) {
        alert("Você ganhou");
    }
}