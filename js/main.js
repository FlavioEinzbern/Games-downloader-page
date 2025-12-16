// load HEADER
fetch("header.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;
    ativarMenu();
  });

function ativarMenu() {
  const page = document.body.dataset.page;
  if (!page) return;

  // Remove old "active" 
  document.querySelectorAll(".nav-link, .dropdown-item")
    .forEach(el => el.classList.remove("active"));

  // Activate Item
  const item = document.querySelector(`.dropdown-item[data-page="${page}"]`);
  if (!item) return;

  item.classList.add("active");

  // Activate dropdown master
  const dropdown = item.closest(".dropdown");
  if (dropdown) {
    dropdown.querySelector(".dropdown-toggle").classList.add("active");
  }
}
