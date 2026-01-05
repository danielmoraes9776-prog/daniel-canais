document.addEventListener("DOMContentLoaded", () => {
  const catalog = document.getElementById("catalog");

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie";

    const img = document.createElement("img");
    img.src = movie.poster;
    img.alt = movie.title;

    // 👉 CAPA RESERVA (SE NÃO CARREGAR)
    img.onerror = () => {
      img.src = "https://via.placeholder.com/300x450/111/ff0000?text=Daniel+Canais";
    };

    const title = document.createElement("h3");
    title.textContent = movie.title;

    card.appendChild(img);
    card.appendChild(title);

    card.onclick = () => {
      localStorage.setItem("movie", JSON.stringify(movie));
      window.location.href = "movie.html";
    };

    catalog.appendChild(card);
  });
});
