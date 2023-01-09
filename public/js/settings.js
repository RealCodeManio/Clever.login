function setTheme(theme) {
    localStorage.setItem("theme", theme)
    document.body.setAttribute("theme", theme)
}