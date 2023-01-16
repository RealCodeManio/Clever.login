(async () => {
var version = document.getElementById("version")
var versionWarning = document.getElementById("version-warning")

var currentVersion;
var latestVersion;

try {
var infoFetch = await fetch(location.origin + "/info.json")
try {
var infoResult = await infoFetch.json()
if (infoResult.version) {
    currentVersion = infoResult.version
}
} catch {
}
} catch {
}

try {
var infoFetch = await fetch("https://cdn.jsdelivr.net/gh/3kh0/3kh0.github.io@latest/info.json")
try {
var infoResult = await infoFetch.json()
if (infoResult.version) {
    latestVersion = infoResult.version
}
} catch {
}
} catch {
}

if (currentVersion) {
    version.innerText = "You are on version " + currentVersion
} else {
    version.innerText = "Cannot get current version."
}

if (latestVersion && currentVersion !== latestVersion) {
    versionWarning.innerText = versionWarning.innerText.replace("%VERSION%", latestVersion)
    versionWarning.style.display = "block"
}

})()