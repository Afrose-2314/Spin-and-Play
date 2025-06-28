
const games = ["guess.html", "math.html", "color.html", "typing.html", "memory.html"];
let selectedGame = "";

function validateLogin() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value;
  if (user && pass === "12345678") {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("gameWheel").style.display = "block";
  } else {
    document.getElementById("loginError").innerText = "Invalid password (default is 12345678)";
  }
}

function spinWheel() {
  const wheel = document.getElementById("wheel");
  const deg = Math.floor(Math.random() * 360) + 1440;
  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = `rotate(${deg}deg)`;

  const actualDeg = deg % 360;
  const index = Math.floor(actualDeg / 72);
  selectedGame = games[index];

  setTimeout(() => {
    document.getElementById("playBtn").style.display = "inline-block";
    document.getElementById("chosenGame").innerText = "🎮 Selected Game: " + selectedGame.replace(".html", "").toUpperCase();
  }, 4500);
}

function playGame() {
  window.location.href = selectedGame;
}
