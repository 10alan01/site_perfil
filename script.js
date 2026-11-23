document.getElementById("year").textContent = new Date().getFullYear();

const navbar = document.querySelector(".navbar");
const backToTop = document.getElementById("backToTop");

function handleScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
  backToTop.classList.toggle("show", window.scrollY > 450);
}
window.addEventListener("scroll", handleScroll);
handleScroll();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".navbar .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navLinks");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
