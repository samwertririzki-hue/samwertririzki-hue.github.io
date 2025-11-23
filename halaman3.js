// Fade-in saat elemen muncul pada scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("p, h2, h3").forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });
});
