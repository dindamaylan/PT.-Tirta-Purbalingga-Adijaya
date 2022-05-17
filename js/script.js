// document.getElementById("hapusAja")
const iconMin = document.getElementById("iconMin")
const iconPlus = document.getElementById("iconPlus")
const cardBody = document.getElementById("cardBody")

function displayIcon() {
    iconMin.classList.remove("displayNone")
    iconPlus.classList.add("displayNone")
    cardBody.classList.remove("displayNone")
}

function displayIconPlus() {
    iconMin.classList.add("displayNone")
    iconPlus.classList.remove("displayNone")
    cardBody.classList.add("displayNone")
}