

const startSearch = async (event) => {
  event.preventDefault();
  const alias = document.querySelector("#alias").value.trim();
  console.log(alias);

  // wanna do that as /api/search or smth to make it all separated and easier to read
  const response = await fetch(`/api/games/search`, {
    method: "POST",
    body: JSON.stringify({ alias }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      var template = document.getElementById("searchResults").innerHTML;
      var renderGames = Handlebars.compile(template);
      document.getElementById("games").innerHTML = renderGames(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

document.querySelector(".search-form").addEventListener("submit", startSearch);

document.getElementById("signUp").addEventListener("click", openForm);
function openForm() {
  document.location.replace("/signUp");
}
