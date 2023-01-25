//3kh0.github.io changelog txt file to html format
//paste in console to generate html

async function v3changelogtohtml() {
var changelog = ""

var changelogCdn = await fetch("https://cdn.jsdelivr.net/gh/3kh0/3kh0.github.io/dump/changelog.txt")
var changelogTxt = await changelogCdn.text()
changelogTxt = changelogTxt.substring(changelogTxt.indexOf("------------------------------------------------------------") + 1)
changelogTxt = changelogTxt.replace("Looks like you have reached the end!", "")
changelogTxt = changelogTxt.trim()
changelogTxt = changelogTxt.replaceAll("------------------------------------------------------------", "")
changelogTxt = changelogTxt.replaceAll("-----------------------------------------------------------", "")

var changelogList = changelogTxt.split("\n")
changelogList = changelogList.filter(item => item)

for (let item in changelogList) {
if (changelogList[item].startsWith("+ ")) {
    changelog = changelog + "    <changelog-added>" + changelogList[item].replace("+ ", "") + "</changelog-added>\n"
} else if (changelogList[item].startsWith("^ ")) {
    changelog = changelog + "    <changelog-changed>" + changelogList[item].replace("^ ", "") + "</changelog-changed>\n"
} else if (changelogList[item].startsWith("- ")) {
    changelog = changelog + "    <changelog-removed>" + changelogList[item].replace("- ", "") + "</changelog-removed>\n"
} else {
    changelog = changelog + "    <p>" + changelogList[item] + "</p>\n"
}
}
    
return changelog;
}

console.log(await v3changelogtohtml())
