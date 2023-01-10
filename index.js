const express = require("express")
const app = express()

const port = process.env.PORT || "2000"

app.use(express.static("./public", {
    extensions: ["html"]
}));

app.get("/", function(req, res){
    res.sendFile("index.html", {root: "./public"});
});

app.use(function (req, res) {
    res.status(404).sendFile("404.html", {root: "./public"});
})

app.listen(port, () => {
    console.log(`3kh0 is running at localhost:${port}`)
})