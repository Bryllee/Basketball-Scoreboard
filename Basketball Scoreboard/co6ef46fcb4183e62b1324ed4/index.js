let homeCount = document.getElementById("home-count")
let guestCount = document.getElementById("guest-count")
let resetCount = document.getElementById("reset-count")

let hCount = 0
let gCount = 0

function homeScore1() {
    hCount += 1
    homeCount.textContent = hCount
}

function homeScore2() {
    hCount += 2
    homeCount.textContent = hCount
}

function homeScore3() {
    hCount += 3
    homeCount.textContent = hCount
}

function guestScore1() {
    gCount += 1
    guestCount.textContent = gCount
}

function guestScore2() {
    gCount += 2
    guestCount.textContent = gCount
}

function guestScore3() {
    gCount += 3
    guestCount.textContent = gCount
}

function resetScore() {
    homeCount.textContent = 0
    guestCount.textContent = 0
    hCount = 0
    gCount = 0
}