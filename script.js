const API = "https://pocket.uft1.com/data/highlights.json";

async function loadProjects(){
  const box = document.getElementById("projects");
  try{
    const res = await fetch(API,{cache:"no-store"});
    if(!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    const list = data.highlights || data.projects || [];
    box.innerHTML = "";
    list.forEach(p=>{
      const el = document.createElement("article");
      el.className = "card";
      el.innerHTML = `
        <img src="svg/paperclip.svg" alt="" class="clip" />
        <h3>${p.title || p.name || "Untitled"}</h3>
        <p>${p.description || p.body || ""}</p>
        <p>
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Live →</a>` : ""}
          ${p.repo ? `&nbsp;&nbsp;<a href="${p.repo}" target="_blank" rel="noopener">Code →</a>` : ""}
        </p>`;
      box.appendChild(el);
    });
    if(!list.length) box.innerHTML = "<p>No projects yet.</p>";
  }catch(e){
    box.innerHTML = "<p>Couldn’t load projects 😢</p>";
    console.error(e);
  }
}
loadProjects();
