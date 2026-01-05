document.addEventListener("DOMContentLoaded", () => {
  const catalog = document.getElementById("catalog");

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie";

    const poster = document.createElement("div");
    poster.className = "poster";
    poster.style.backgroundImage = `url(${movie.poster})`;

    // fallback manual
    poster.onerror = () => {
      poster.style.backgroundImage =
        "url(https://via.placeholder.com/300x450/111/ff0000?text=Daniel+Canais)";
    };

    const title = document.createElement("h3");
    title.textContent = movie.title;

    card.appendChild(poster);
    card.appendChild(title);

    card.onclick = () => {
      localStorage.setItem("movie", JSON.stringify(movie));
      window.location.href = "movie.html";
    };

    catalog.appendChild(card);
  });
});
