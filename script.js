// Menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Payment button handling
// Assuming you have two buttons with IDs: payMastercard and payBank
const payMastercard = document.getElementById("payMastercard");
const payBank = document.getElementById("payBank");

// Redirect to Mastercard payment page
if (payMastercard) {
  payMastercard.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "mastercard.html"; // Replace with your real Mastercard page
  });
}

// Redirect to Bank Transfer payment page
if (payBank) {
  payBank.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "bank.html"; // Replace with your real Bank Transfer page
  });
}

// Optional: close modal function
function closePayment() {
  const modal = document.getElementById("paymentModal");
  if (modal) modal.style.display = "none";
}

