const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

noButton.addEventListener("mouseover", () => {
    // Menghitung batas layar agar tombol tidak keluar dari layar
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    // Menentukan posisi acak baru
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
});

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
    popup.classList.add("fade-in"); // Menambahkan efek animasi dari CSS
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
    popup.classList.remove("fade-in"); // Reset animasi ketika ditutup
});