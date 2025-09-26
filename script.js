const API = "https://pocket.uft1.com/data/highlights.json";

async function loadProjects() {
  const container = document.getElementById("projects");
  try {
    const res = await fetch(API, { cache: "no-store" });
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();

    const list = data.projects || data; // handle either array or {projects:[]}
    container.innerHTML = "";

    list.forEach(p => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <h3>${p.title || p.name}</h3>
        <p>${p.description || ""}</p>
        <p>
          ${p.live ? `<a href="${p.live}" target="_blank">Live →</a>` : ""}
          ${p.repo ? `&nbsp;<a href="${p.repo}" target="_blank">Code →</a>` : ""}
        </p>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = `<p>Couldn’t load projects 😢</p>`;
    console.error(err);
  }
}
loadProjects();
