const loadingBar = document.getElementById("loading-bar");
const percentSpan = loadingBar.children[0];

const endDate = new Date(2020, 2, 3);
const currentDate = new Date();

let percent = 100;
if (currentDate < endDate) {
  const millisPerDay = 24 * 60 * 60 * 1000;
  const daysLeft = Math.abs((endDate - currentDate) / millisPerDay);
  percent = (1 - daysLeft / 40) * 100;
}

if (percent > 50) {
  percentSpan.style.color = "white";
  percentSpan.style.mixBlendMode = "normal";
}

percentSpan.textContent = Math.floor(percent) + "%";

percent = percent + "%";

loadingBar.style.backgroundImage = `linear-gradient(
    to right,
    #1e793c,
    #1e793c ${percent},
    #e7f2e5 ${percent},
    #e7f2e5
  )`;
