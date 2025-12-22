const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const payBtn = document.getElementById("payBtn");
if (payBtn) {
  payBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Payment option selected: Mastercard or Bank Transfer");
  });
}
