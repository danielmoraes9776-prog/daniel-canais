const catalog = document.getElementById("catalog");

movies.forEach(movie => {
  const div = document.createElement("div");
  div.className = "movie";
  div.innerHTML = `
    <img src="${movie.poster}">
    <p>${movie.title}</p>
  `;
  div.onclick = () => {
    localStorage.setItem("movie", JSON.stringify(movie));
    window.location = "movie.html";
  };
  catalog.appendChild(div);
});
