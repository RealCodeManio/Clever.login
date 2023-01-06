self.addEventListener("fetch", async function(e) {
    var path = new URL(e.request.url).pathname

    if (path.startsWith("/files/")) {
        var fetchPath = "https://cdn.jsdelivr.net/gh/3kh0/3kh0.github.io/projects/" + path.split("/files/")[1]

        if (fetchPath.endsWith(".html")) {
            var customFetch = await fetch(fetchPath)
            var htmlCode = await customFetch.text()

            e.respondWith(
                new Response(htmlCode, {
                    status: fetchPath.status,
                    headers: fetchPath.rawHeaders
                })
            )
        } else {
            e.respondWith(fetch(fetchPath))
        }
    }
})