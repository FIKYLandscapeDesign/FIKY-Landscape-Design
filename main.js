// Mobile menu
const toggle = document.querySelector(".nav-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll(".nav a").forEach((a) =>
    a.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// Tally form embed
const tallyFrame = document.querySelector("iframe[data-tally-src]");
if (tallyFrame) {
  if (tallyFrame.dataset.tallySrc.includes("YOUR_FORM_ID")) {
    // Form ID not added yet: show a friendly placeholder instead of a broken frame
    const note = document.createElement("div");
    note.className = "tally-placeholder";
    note.innerHTML =
      'Form coming soon. In the meantime, email <a href="mailto:hello@fikylandscapedesign.com">hello@fikylandscapedesign.com</a>.';
    tallyFrame.replaceWith(note);
  } else {
    const src = "https://tally.so/widgets/embed.js";
    const load = () => {
      if (typeof Tally !== "undefined") Tally.loadEmbeds();
      else document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((f) => (f.src = f.dataset.tallySrc));
    };
    const s = document.createElement("script");
    s.src = src;
    s.onload = load;
    s.onerror = load;
    document.body.appendChild(s);
  }
}

// Header turns light with the green logo once you scroll past the top
const header = document.querySelector(".site-header");
if (header) {
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
