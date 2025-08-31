// ========== Dark Mode Toggle ==========
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("darkModeBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});

// ========== Contact Form Validation ==========
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
      } else {
        alert("Form Submitted Successfully 🎉");
        this.reset();
      }
    });
  }
});

// ========== Auto Year in Footer ==========
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer p");
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} My Portfolio | All Rights Reserved`;
  }
});

// ========== Greeting Message (Time Based) ==========
document.addEventListener("DOMContentLoaded", () => {
  const homeSection = document.getElementById("home");
  if (homeSection) {
    let hours = new Date().getHours();
    let greeting;
    if (hours < 12) {
      greeting = "Good Morning ☀️";
    } else if (hours < 18) {
      greeting = "Good Afternoon 🌞";
    } else {
      greeting = "Good Evening 🌙";
    }
    let greetMsg = document.createElement("h3");
    greetMsg.textContent = greeting;
    homeSection.appendChild(greetMsg);
  }
});

// ========== Scroll to Top Button ==========
document.addEventListener("DOMContentLoaded", () => {
  let topBtn = document.getElementById("topBtn");
  if (topBtn) {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    };
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

// ========== Typewriter Effect ==========
function typeWriter(text, elementId, speed) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById(elementId).innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("welcomeText")) {
    typeWriter("Welcome to My Portfolio 🚀", "welcomeText", 100);
  }
});
