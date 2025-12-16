// load HEADER
fetch("header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;
    ativarMenu();
  });

// Activate menu
function ativarMenu() {
  const page = document.body.dataset.page;
  if (!page) return;

  // Activate item
  const item = document.querySelector(`[data-page="${page}"]`);
  if (item) {
    item.classList.add("active");

    // Activate dropdown master
    const dropdown = item.closest(".dropdown");
    if (dropdown) {
      dropdown.querySelector(".dropdown-toggle").classList.add("active");
    }
  }
}
