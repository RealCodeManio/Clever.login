(async () => {
    var gamesElement = document.querySelector(".games")

    var gamesData = await fetch(location.origin + "/assets/games.json")
    var games = await gamesData.json()

    for (let game in games) {
        var newGame = document.createElement("div")
        newGame.className = "game"

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