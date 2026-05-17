const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const toTop = document.getElementById("toTop");
const navLinks = document.querySelectorAll(".nav a");
const toggles = document.querySelectorAll(".toggle");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

toggles.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const target = document.getElementById(targetId);

    if (!target) return;

    target.classList.toggle("open");
    button.textContent = target.classList.contains("open")
      ? "Скрыть"
      : "Что сделать";
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }

  setActiveNavLink();
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function setActiveNavLink() {
  const sections = [...document.querySelectorAll("section[id]")];
  const current = sections.findLast((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 120;
  });

  if (!current) return;

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current.id}`
    );
  });
}


const postButtons = document.querySelectorAll(".post-summary");

postButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const postId = button.dataset.post;
    const detail = document.getElementById(postId);

    if (!detail) return;

    detail.classList.toggle("open");
    button.classList.toggle("open");

    const icon = button.querySelector(".chevron");
    if (icon) {
      icon.textContent = detail.classList.contains("open") ? "−" : "+";
    }
  });
});
