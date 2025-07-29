// 🌟 Hide intro animation after one play
window.addEventListener("load", () => {
  const intro = document.getElementById("intro-animation");

  // Wait 4s before removing the animation from DOM
  setTimeout(() => {
    intro.style.display = "none";
  }, 4000); // 3s animation + 1s buffer
});

// 💫 Scroll reveal effect for elements with .highlight-box
const revealElements = document.querySelectorAll('.highlight-box');

const revealOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.opacity = '1';
      revealOnScroll.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.style.transform = 'translateY(50px)';
  el.style.opacity = '0';
  el.style.transition = 'all 0.6s ease-out';
  revealOnScroll.observe(el);
});
