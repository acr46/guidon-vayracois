document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    if (toggle && menu) {
      toggle.addEventListener("change", function () {
        menu.style.display = this.checked ? "flex" : "none";
      });
      document.querySelectorAll("#menu a").forEach((link) => {
        link.addEventListener("click", () => {
          toggle.checked = false;
          menu.style.display = "none";
        });
      });
    }
  });
  