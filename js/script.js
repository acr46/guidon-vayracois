function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('show');
}

  
function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookie-banner").style.display = "none";
}

function refuseCookies() {
  localStorage.setItem("cookiesAccepted", "false");
  document.getElementById("cookie-banner").style.display = "none";
}

window.onload = function () {
  const accepted = localStorage.getItem("cookiesAccepted");
  if (accepted === "true" || accepted === "false") {
    document.getElementById("cookie-banner").style.display = "none";
  }
};

  
  window.addEventListener("DOMContentLoaded", function () {
    fetch("includes/footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
      });
  });
  