// В этом примере, шкала заполнения увеличивается на 10% каждую секунду.
const progressBar = document.getElementById('progress');
let progress = 0;

function updateProgressBar() {
    if (progress < 100) {
        progress += 10;
        progressBar.style.width = progress + '%';
    }
}

setInterval(updateProgressBar, 1000);
