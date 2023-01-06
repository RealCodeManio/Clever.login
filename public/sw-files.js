async function handleRequest(fetchPath) {
    if (!fetchPath.endsWith(".html")) {
        return fetch(fetchPath)
    }

    var customFetch = await fetch(fetchPath)
    var htmlCode = await customFetch.text()

    var newHeaders = Object.assign({}, customFetch.rawHeaders)

    newHeaders['content-type'] = "text/html"

    return new Response(htmlCode, {
        status: customFetch.status,
        headers: newHeaders
    })
}

self.addEventListener("fetch", function(e) {
    var path = new URL(e.request.url).pathname

    if (path.startsWith("/files/")) {
        var fetchPath = "https://cdn.jsdelivr.net/gh/3kh0/3kh0.github.io/projects/" + path.split("/files/")[1]

            e.respondWith(handleRequest(fetchPath))
    }
})