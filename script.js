
const submitInput = document.getElementById('submit-btn');

function getDataForm(e) {

    e.preventDefault();

    let wins = Number(document.getElementById('wins').value);
    let losses = Number(document.getElementById('losses').value);
    let winrate = Number(document.getElementById('winrate').value);

    let total = wins + losses;
    let dec_winrate = winrate / 100;

    let current_winrate = Math.round((wins / total) * 10000) / 100;
    let games = Math.round((wins - (dec_winrate * wins) - (dec_winrate * losses)) / (dec_winrate - 1));

    if (games < 0) {
        games = 0
    }

    if (wins < 0 || losses < 0 || winrate < 0 || winrate >= 100) {
        document.getElementById('current-wr').innerHTML = "An error occurred in the calculation. Try again.";
        document.getElementById('num-wins').innerHTML = "";
    } else {
        document.getElementById('current-wr').innerHTML = `Your current winrate is ${current_winrate}% `;
        document.getElementById('num-wins').innerHTML = `You need ${games} wins to get a winrate of ${winrate}% !`;
    }

}

document.addEventListener('DOMContentLoaded', function () {
    submitInput.addEventListener('click', getDataForm, false);
}, false);
