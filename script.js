function mobileNav() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}


let logo = document.getElementById('footer-logo');

function logoSpinner(event) {
  let time = Math.floor(Math.random() * 4 + 1);
  let spins = Math.floor(Math.random() * 10 + 1);
  logo.style.transform = `rotate(${spins}turn)`;
  logo.style.transition = `${time}s`;
}

const spinButton = document.getElementById("spin-button");

logo.addEventListener('click', logoSpinner)