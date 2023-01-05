async function randomSay() {
    var say = await fetch(location.origin + "/assets/say.json")
    var says = await say.json()
    return says[Math.floor(Math.random()*says.length)]
}

if (document.querySelector(".message")) {
    (async () => {
        document.querySelector(".message").innerText = await randomSay()
    })()
}