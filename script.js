
hatList = ["img/hat-1.png", "img/hat-2.png", "img/hat-3.png", "img/hat-4.png"]
topList = ["img/top-1.png", "img/top-2.png", "img/top-3.png", "img/top-4.png"]
bottomList = ["img/bottom-1.png", "img/bottom-2.png", "img/bottom-3.png", "img/bottom-4.png"]
shoeList = ["img/shoes-1.png", "img/shoes-2.png", "img/shoes-3.png", "img/shoes-4.png"]

const changeHat = document.getElementById("change_hat")
const changeTop = document.getElementById("change_top")
const changeBottom = document.getElementById("change_bottom")
const changeShoes = document.getElementById("change_shoes")

let displayedHat = document.getElementById("hat")
let displayedTop = document.getElementById("top")
let displayedBottom = document.getElementById("bottom")
let displayedShoes = document.getElementById("shoes")

hatIndex = 0
topIndex = 0
bottomIndex = 0
shoesIndex = 0

function veranderHat() {
    hatIndex++;
    if(hatIndex >= hatList.length) {
        hatIndex = 0;
    }
    displayedHat.src = hatList[hatIndex]
    console.log(hatIndex)
}

function veranderTop() {
    topIndex++;
    if(topIndex >= topList.length) {
        topIndex = 0;
    }
    displayedTop.src = topList[topIndex]
    console.log(topIndex)
}

function veranderBottom() {
    bottomIndex++;
    if(bottomIndex >= bottomList.length) {
        bottomIndex = 0;
    }
    displayedBottom.src = bottomList[bottomIndex]
    console.log(bottomIndex)
}

function veranderShoes() {
    shoesIndex++;
    if(shoesIndex >= shoeList.length) {
        shoesIndex = 0;
    }
    displayedShoes.src = shoeList[shoesIndex]
    console.log(shoesIndex)
}

changeHat.addEventListener("click", veranderHat)
changeTop.addEventListener("click", veranderTop)
changeBottom.addEventListener("click", veranderBottom)
changeShoes.addEventListener("click", veranderShoes)