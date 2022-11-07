let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")
let gamePeriod = document.getElementById("period")
let homeEl = 0
let guestEl = 0
let periodEl = 0


function add1Home() {
    homeEl += 1
    homeScore.textContent = homeEl
}

function add2Home() {
    homeEl += 2
    homeScore.textContent = homeEl
}

function add3Home() {
    homeEl += 3
    homeScore.textContent = homeEl
}

function add1Guest() {
    guestEl += 1
    guestScore.textContent = guestEl
}

function add2Guest() {
    guestEl += 2
    guestScore.textContent = guestEl
}

function add3Guest() {
    guestEl += 3
    guestScore.textContent = guestEl
}

function period1() {
    periodEl += 1
    gamePeriod.textContent = periodEl
}

function period2() {
    periodEl += 2
    gamePeriod.textContent = periodEl
}

function period3() {
    periodEl += 3
    gamePeriod.textContent = periodEl
}