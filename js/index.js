var tab = localStorage.getItem("tab")
if (tab) {
    try {
        var tabData = JSON.parse(tab)
    } catch {
        var tabData = {}
    }
} else {
        var tabData = {}
}
if (tabData.title) {
    document.title = tabData.title
}
if (tabData.icon) {
    document.querySelector("link[rel='icon']").href = tabData.icon
}

var theme = localStorage.getItem("theme") || "default"

document.body.setAttribute("theme", theme)

class changelogAdded extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div class="changelog-item">
        <div class="changelog-type" added></div>
        ${this.innerText}
        </div>
        `
    }
}

customElements.define("changelog-added", changelogAdded)

class changelogRemoved extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div class="changelog-item">
        <div class="changelog-type" removed></div>
        ${this.innerText}
        </div>
        `
    }
}

customElements.define("changelog-removed", changelogRemoved)

class changelogChanged extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div class="changelog-item">
        <div class="changelog-type" changed></div>
        ${this.innerText}
        </div>
        `
    }
}

customElements.define("changelog-changed", changelogChanged)
