var splashCache;

async function randomSay() {
    if (splashCache) {
        var says = splashCache
    } else {
        var say = await fetch(location.origin + "/assets/say.json")
        var says = await say.json()
        splashCache = says
    }
    return says[Math.floor(Math.random()*says.length)]
}

async function setRandomSay() {
    var randomSplash = await randomSay()
    if (randomSplash == "%REAL_IP%") {
        var ips = await getIPs()
        if (ips[0]) {
            randomSplash = "Your real IP is " + ips[0]
        } else {
            randomSplash = "Cannot get your IP :("
        }
    }
    document.querySelector(".message").innerText = randomSplash
}

if (document.querySelector(".message")) {
    setRandomSay()
}