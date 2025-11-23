document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if(prevBtn) prevBtn.addEventListener("click", () => {
    const prevPage = prevBtn.getAttribute("data-prev");
    if(prevPage) window.location.href = prevPage;
  });

  if(nextBtn) nextBtn.addEventListener("click", () => {
    const nextPage = nextBtn.getAttribute("data-next");
    if(nextPage) window.location.href = nextPage;
  });
});
