// Ուղարկել Հղում կոճակ
const sendBtn = document.querySelector(".send-btn");
if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    alert("Գաղտնաբառի վերականգնման հղումը ուղարկվել է նշված էլփոստի հասցեին։");
  });
}

// Վերաուղարկել կոճակներ աղյուսակում
document.querySelectorAll(".resend-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const row = btn.closest("tr");
    const studentName = row.children[0].textContent;
    const email = row.children[1].textContent;
    alert(`Նոր վերականգնման հղում ուղարկվել է ${studentName}-ին (${email})։`);
  });
});

// Որոնման դաշտում Enter սեղմելիս
const searchInput = document.querySelector(".search-bar input");
if (searchInput) {
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      alert(`Որոնում ըստ՝ ${searchInput.value}`);
    }
  });
}
