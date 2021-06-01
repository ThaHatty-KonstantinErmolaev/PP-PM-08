
// Get the modal
let modal = document.getElementById("myModal");

let counter = 0;
// Get the button that opens the modal
let button = document.getElementById("openModal");

let hamburger = document.getElementById("nav-icon4");


// When the user clicks the button, open the modal
button.onclick = function() {

    if (counter % 2 === 0) {
        modal.style.display = "block";
        counter++;
        hamburger.classList.add("open");
    } else {
        modal.style.display = "none";
        counter--;
        hamburger.classList.remove("open");
    }
}