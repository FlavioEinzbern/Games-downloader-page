// Load HEADER
fetch("header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;
    ativarMenu();
  });

function ativarMenu() {
  const page = document.body.dataset.page;
  if (!page) return;

  // Remove active ONLY from menu items
  document.querySelectorAll(
    ".navbar .dropdown-item.active, .navbar .dropdown-toggle.active"
  ).forEach(el => el.classList.remove("active"));

  // Find current item
  const item = document.querySelector(
    `.navbar .dropdown-item[data-page="${page}"]`
  );
  if (!item) return;

  // Activate item
  item.classList.add("active");

  // Activate parent dropdown
  const dropdown = item.closest(".dropdown");
  if (dropdown) {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    toggle?.classList.add("active");
  }
}
