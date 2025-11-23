document.addEventListener("DOMContentLoaded", () => {
  // Membuat lebih banyak partikel (120 partikel)
  for (let i = 0; i < 120; i++) {
    let particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.width = Math.random() * 6 + 4 + "px";  // ukuran 4-10px
    particle.style.height = particle.style.width;
    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.animationDuration = (Math.random() * 4 + 3) + "s"; // 3-7s → cepat
    particle.style.top = Math.random() * window.innerHeight + "px"; // posisi awal acak
    document.body.appendChild(particle);
  }

  // Animasi judul muncul
  const heading = document.querySelector("h1");
  heading.style.opacity = 0;
  heading.style.transform = "translateY(-20px)";
  setTimeout(() => {
    heading.style.transition = "all 1s ease";
    heading.style.opacity = 1;
    heading.style.transform = "translateY(0)";
  }, 300);

  // Tombol interaktif
  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    button.textContent = "Loading...";
    button.style.backgroundColor = "rgba(255,255,255,0.6)";
  });
});
