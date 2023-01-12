function searchGames(query) {
    var gamesElement = document.querySelector(".games")

    for (let game in gamesElement.children) {
        if (gamesElement.children[game] instanceof Element) {
            if (query) {
                var gameName = gamesElement.children[game].querySelector(".game-text").innerText.trim().toLowerCase()
                if (gameName.includes(query)) {
                    gamesElement.children[game].removeAttribute("hidden")
                } else {
                    gamesElement.children[game].setAttribute("hidden", "")
                }
            } else {
                gamesElement.children[game].removeAttribute("hidden")
            }
        }
    }

    if (document.querySelectorAll(".game:not([hidden])").length == 0) {
        document.querySelector(".nogames").style.display = "initial"
    } else {
        document.querySelector(".nogames").style.display = "none"
    }
}

(async () => {
    var gamesElement = document.querySelector(".games")

    var gamesData = await fetch(location.origin + "/assets/games.json")
    var games = await gamesData.json()

    for (let game in games) {
        var newGame = document.createElement("a")
        newGame.className = "game"
        newGame.setAttribute("href", games[game].url)

        var gameImage = document.createElement("div")
        gameImage.className = "game-image"
        gameImage.style.setProperty("--url", "url('" + games[game].img + "')")

        newGame.appendChild(gameImage)

        var gameText = document.createElement("div")
        gameText.className = "game-text"
        gameText.innerText = games[game].name

        newGame.appendChild(gameText)

        gamesElement.appendChild(newGame)
    }
})()