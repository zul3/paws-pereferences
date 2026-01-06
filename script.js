const TOTAL = 10;

let index = 0;
let liked = [];
let history = [];
let soundOn = true;

const card = document.getElementById("cat-card");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const catInfo = document.getElementById("catInfo");
const loader = document.getElementById("loader");
const undoBtn = document.getElementById("undoBtn");
const soundBtn = document.getElementById("soundToggle");

const likeSound = new Audio("sounds/like.mp3");
const dislikeSound = new Audio("sounds/dislike.mp3");

const traits = ["Fluffy", "Short Fur", "Orange", "Playful", "Lazy", "Chaotic"];
const ages = ["Kitten", "Adult", "Senior"];

function randomCat() {
  return {
    src: `https://cataas.com/cat?${Date.now()}`,
    trait: traits[Math.floor(Math.random() * traits.length)],
    age: ages[Math.floor(Math.random() * ages.length)]
  };
}

let current = randomCat();

function loadCat() {
  if (index >= TOTAL) {
    showSummary();
    return;
  }

  loader.classList.remove("d-none");
  card.onload = () => loader.classList.add("d-none");

  current = randomCat();
  card.src = current.src;
  card.className = "cat-card shadow";
  document.getElementById("card-container").className = "";

  catInfo.innerHTML = `🐱 ${current.age} · ${current.trait}`;

  progressText.textContent = `${index + 1} / ${TOTAL}`;
  progressBar.style.width = `${((index + 1) / TOTAL) * 100}%`;

  undoBtn.disabled = history.length === 0;
}

function swipe(type) {
  navigator.vibrate?.(20);

  if (soundOn) {
    (type === "liked" ? likeSound : dislikeSound).play();
  }

  history.push({ ...current, liked: type === "liked" });
  if (type === "liked") liked.push(current);

  card.classList.add(type);
  document.getElementById("card-container").classList.add(
    type === "liked" ? "show-like" : "show-nope"
  );

  setTimeout(() => {
    index++;
    loadCat();
  }, 300);
}

function undo() {
  if (history.length === 0 || index === 0) return;

  index--;

  const last = history.pop();
  if (last.liked) liked.pop();

  current = last;
  card.src = current.src;
  card.className = "cat-card shadow";
  document.getElementById("card-container").className = "";

  catInfo.innerHTML = `🐱 ${current.age} · ${current.trait}`;

  progressText.textContent = `${index + 1} / ${TOTAL}`;
  progressBar.style.width = `${((index + 1) / TOTAL) * 100}%`;

  undoBtn.disabled = history.length === 0;
}

function showSummary() {
  document.getElementById("card-container").classList.add("d-none");
  document.getElementById("summary").classList.remove("d-none");

  const percent = Math.round((liked.length / TOTAL) * 100);

  document.getElementById("summaryTitle").textContent =
    `You liked ${liked.length}/${TOTAL} cats 😻 (${percent}%)`;

  if (percent >= 70) confetti();

  document.getElementById("analysisText").textContent =
    `You seem to prefer ${mostCommon(liked.map(c => c.trait))} cats.`;

  liked.forEach(c => {
    document.getElementById("likedCats").innerHTML += `
      <div class="col-4">
        <img src="${c.src}" alt="Liked cat">
      </div>`;
  });
}

function mostCommon(arr) {
  return arr.sort((a, b) =>
    arr.filter(v => v === a).length - arr.filter(v => v === b).length
  ).pop();
}

/* Controls */
document.getElementById("likeBtn").onclick = () => swipe("liked");
document.getElementById("dislikeBtn").onclick = () => swipe("disliked");
undoBtn.onclick = undo;

soundBtn.onclick = () => {
  soundOn = !soundOn;
  soundBtn.textContent = soundOn ? "🔊 Sound On" : "🔇 Muted";
  soundBtn.classList.toggle("btn-warning");
  soundBtn.classList.toggle("btn-secondary");
};

document.getElementById("replayBtn").onclick = () => location.reload();

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") swipe("liked");
  if (e.key === "ArrowLeft") swipe("disliked");
});

loadCat();
