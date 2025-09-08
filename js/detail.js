const LS_KEY = "likes";
const getLiked = () => {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) ?? []; }
  catch { return []; }
};
// const setLiked = (arr) => localStorage.setItem(LS_KEY, JSON.stringify(arr));
function setLiked(arr){ 
  return localStorage.setItem(LS_KEY, JSON.stringify(arr))
}
const heartSVG = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.1 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5
             2 6 4 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.59 4.81 14.26 4 16 4
             18.5 4 20.5 6 20.5 8.5c0 3.78-3.4 6.86-8.55 11.54L12.1 21.35z"/>
  </svg>
`;

function getIdFromURL() {
  const p = new URLSearchParams(location.search);
  return Number(p.get("id"));
}

async function loadDetail() {
  const id = getIdFromURL();
  const res = await fetch("./data/destinations.json");
  const data = await res.json();
  const item = data.destinations.find((d) => d.id === id);

  if (!item) {
    document.getElementById("details").innerHTML = "<p>Not found.</p>";
    return;
  }

  const likedArr = getLiked();
  const liked = likedArr.includes(item.id);

  const details = document.getElementById("details");
  details.innerHTML = `
    <div class="detail-layout">
      <div class="detail-image">
        <img src="img/${item.image}" alt="${item.title}">
      </div>
      <div class="detail-info">
        <h3>${item.destination}</h3>
        <h1>${item.title}</h1>
        <p><em>${item.subtitle}</em></p>
        <p>${item.text}</p>

        <h4>Facilities</h4>
        <ul>${item.facilities.map((f) => `<li>${f}</li>`).join("")}</ul>

        <div class="card-footer" style="margin-top:12px;">
          <button class="like-btn ${liked ? "liked" : ""}" 
                  data-id="${item.id}" 
                  aria-pressed="${liked}" 
                  aria-label="${liked ? "Remove like" : "Like"}"
                  title="${liked ? "Unlike" : "Like"}">
            ${heartSVG}
          </button>
          <a class="more-link" href="index.html">BACK</a>
        </div>
      </div>
    </div>
  `;

  details.addEventListener("click", (e) => {
    const btn = e.target.closest(".like-btn");
    if (!btn) return;
    const id = Number(btn.dataset.id);
    let arr = getLiked();

    if (arr.includes(id)) {
      arr = arr.filter((x) => x !== id);
      btn.classList.remove("liked");
      btn.setAttribute("aria-pressed", "false");
      btn.setAttribute("aria-label", "Like");
      btn.title = "Like";
    } else {
      arr.push(id);
      btn.classList.add("liked");
      btn.setAttribute("aria-pressed", "true");
      btn.setAttribute("aria-label", "Remove like");
      btn.title = "Unlike";
    }
    setLiked(arr);
  });
}

loadDetail();
