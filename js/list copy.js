const LS_KEY = "likedDestinations:v1";

const getLiked = () => {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) ?? []; }
  catch { return []; }
};
const setLiked = (arr) => localStorage.setItem(LS_KEY, JSON.stringify(arr));
const isLiked = (id, likedArr) => likedArr.includes(id);

const heartSVG = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.1 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5
             2 6 4 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.59 4.81 14.26 4 16 4
             18.5 4 20.5 6 20.5 8.5c0 3.78-3.4 6.86-8.55 11.54L12.1 21.35z"/>
  </svg>
`;


async function loadList() {
  const res = await fetch("./data/destinations.json");
  const data = await res.json();

  const listEl = document.getElementById("list");
  const liked = getLiked();

  data.destinations.forEach((d) => {
    const likedNow = isLiked(d.id, liked);
    console.log(liked);
    
    

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="img/${d.image}" alt="${d.title}">
      <div class="card-footer">
        <button class="like-btn ${likedNow ? "liked" : ""}" 
                data-id="${d.id}" 
                aria-pressed="${likedNow}" 
                aria-label="${likedNow ? "Remove like" : "Like"}"
                title="${likedNow ? "Unlike" : "Like"}">
          ${heartSVG}
        </button>
        <a class="more-link" href="destination.html?id=${d.id}">MORE</a>
      </div>
    `;

    listEl.appendChild(card);
  });

  listEl.addEventListener("click", (e) => {
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

loadList();
