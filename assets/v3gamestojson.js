//3kh0.github.io games on the projects page to json format
//changes route from projects to /files and removes hot tag
//paste in console to generate json

async function v3gamestojson() {
var games = []

var projectsCdn = await fetch("https://cdn.jsdelivr.net/gh/3kh0/3kh0.github.io/projects.html")
var projectsCode = await projectsCdn.text()
projectsCode = projectsCode.split(`<div id="search" class="flex-container">`)[1]
projectsCode = projectsCode.split(` </div>
    <p style="font-size: 25px;" class="text-center">
      Cant find what you are looking for?<br />
      <span style="font-size: 18px;">It might be in the <a href="/dump/index.html">Miscellaneous section</a>!</span>
    </p>`)[0]
var parser = new DOMParser();
var doc = parser.parseFromString(projectsCode, "text/html");

var gamesElements = doc.body.children

for (let game in gamesElements) {
if (gamesElements[game] instanceof Element) {
var name = gamesElements[game].querySelector(".game-title").innerText.trim().replaceAll(`\n             Hot`, "")
var url = gamesElements[game].getAttribute("href").trim().replace("projects", "/files")
var img = gamesElements[game].querySelector(".game-icon").getAttribute("src").trim().replace("projects", "/files")
games.push({
    name: name,
    url: url,
    img: img
})
}
}

return JSON.stringify(games, null, 4);
}

console.log(await v3gamestojson())