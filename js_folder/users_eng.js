 let currentRow = null;

  // Open modal and populate fields
  document.querySelectorAll(".fa-edit").forEach((btn) => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr");
      currentRow = row;
      const name = row.children[0].textContent;
      const email = row.children[1].textContent;
      document.getElementById("editName").value = name;
      document.getElementById("editEmail").value = email;
      document.getElementById("editModal").style.display = "flex";
    });
  });

  function closeEditModal() {
    document.getElementById("editModal").style.display = "none";
  }

  function saveEdit() {
    if (currentRow) {
      currentRow.children[0].textContent = document.getElementById("editName").value;
      currentRow.children[1].textContent = document.getElementById("editEmail").value;
      closeEditModal();
    }
  }

  // Delete user row
  document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr");
      const name = row.children[0].textContent;
      if (confirm(`Are you sure you want to delete ${name}?`)) {
        row.remove();
      }
    });
  });
  // Open Add User modal
document.querySelector(".add-user-btn").addEventListener("click", function () {
  document.getElementById("addModal").style.display = "flex";
});

function closeAddModal() {
  document.getElementById("addModal").style.display = "none";
  document.getElementById("newName").value = "";
  document.getElementById("newEmail").value = "";
}

function saveNewUser() {
  const name = document.getElementById("newName").value.trim();
  const email = document.getElementById("newEmail").value.trim();

  if (!name || !email) {
    alert("Please enter both name and email.");
    return;
  }

  const tbody = document.querySelector(".users-table tbody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td><span class="role-badge student">Student</span></td>
    <td><span class="status-badge active">Active</span></td>
    <td>${new Date().toISOString().split("T")[0]}</td>
    <td>
      <div class="actions-cell">
        <button class="action-btn"><i class="far fa-eye"></i></button>
        <button class="action-btn"><i class="far fa-edit"></i></button>
        <button class="action-btn delete"><i class="far fa-trash-alt"></i></button>
      </div>
    </td>
  `;
  tbody.appendChild(newRow);
  closeAddModal();

  // Rebind edit/delete events for new row
  newRow.querySelector(".fa-edit").addEventListener("click", function () {
    currentRow = newRow;
    document.getElementById("editName").value = name;
    document.getElementById("editEmail").value = email;
    document.getElementById("editModal").style.display = "flex";
  });

  newRow.querySelector(".fa-trash-alt").addEventListener("click", function () {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      newRow.remove();
    }
  });
}