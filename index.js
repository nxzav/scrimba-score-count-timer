let home = 0;
let guest = 0;
let homeCount = document.getElementById('home-count');
let guestCount = document.getElementById('guest-count');
homeCount.textContent = home;
guestCount.textContent = guest;

let homeBtn1 = document.getElementById('home-add1');
let homeBtn2 = document.getElementById('home-add2');
let homeBtn3 = document.getElementById('home-add3');
let guestBtn1 = document.getElementById('guest-add1');
let guestBtn2 = document.getElementById('guest-add2');
let guestBtn3 = document.getElementById('guest-add3');

function highlightLeader() {
    if (home > guest) {
        homeCount.classList.add('leader');
        guestCount.classList.remove('leader');
    } else if (guest > home) {
        homeCount.classList.remove('leader');
        guestCount.classList.add('leader');
    } else {
        homeCount.classList.remove('leader');
        guestCount.classList.remove('leader');
    }
}

// Home
function homeAdd1() {
    home = home += 1;
    homeCount.textContent = home;
    highlightLeader();
}
function homeAdd2() {
    home = home += 2;
    homeCount.textContent = home;
    highlightLeader();
}
function homeAdd3() {
    home = home += 3;
    homeCount.textContent = home;
    highlightLeader();
}
// Guest
function guestAdd1() {
    guest = guest += 1;
    guestCount.textContent = guest;
    highlightLeader();
}
function guestAdd2() {
    guest = guest += 2;
    guestCount.textContent = guest;
    highlightLeader();
}
function guestAdd3() {
    guest = guest += 3;
    guestCount.textContent = guest;
    highlightLeader();
}

function newGame() {
    home = 0;
    guest = 0;
    homeCount.textContent = home;
    guestCount.textContent = guest;
    highlightLeader();
}

// Timer
let timerInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 10);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
}

function updateTimer() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    updateDisplay();
}

function updateDisplay() {
    const formattedTime = padNumber(minutes) + ':' + padNumber(seconds) + '.' + padNumber(milliseconds / 10);
    document.getElementById('timer').innerText = formattedTime;
}

function padNumber(number) {
    return number < 10 ? '0' + number : number;
}
