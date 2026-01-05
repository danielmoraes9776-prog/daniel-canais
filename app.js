document.addEventListener("DOMContentLoaded", () => {
  const catalog = document.getElementById("catalog");

  if (!catalog) {
    console.error("Elemento catalog não encontrado");
    return;
  }

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie";

    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    `;

    card.onclick = () => {
      localStorage.setItem("movie", JSON.stringify(movie));
      window.location.href = "movie.html";
    };

    catalog.appendChild(card);
  });
});
