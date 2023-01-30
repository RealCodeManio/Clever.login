//3kh0.github.io home page reviews to json format
//changes route from img to /images
//paste in console to generate json

async function v3reviewstojson() {
  var reviews = [];

  var indexCdn = await fetch("https://cdn.jsdelivr.net/gh/3kh0/3kh0.github.io/index.html");
  var indexCode = await indexCdn.text();
  indexCode = indexCode.split(`<div class="carousel-inner">`)[1];
  indexCode = indexCode.split(`</div>

        <!-- Left and right controls -->`)[0];

  var parser = new DOMParser();
  var doc = parser.parseFromString(indexCode, "text/html");

  var reviewItems = doc.body.children;

  for (let reviewItem in reviewItems) {
    if (reviewItems[reviewItem] instanceof Element) {
      var reviewItemReviews = reviewItems[reviewItem].children[0].children;

      for (let review in reviewItemReviews) {
        if (reviewItemReviews[review] instanceof Element) {
          var name = reviewItemReviews[review].querySelector(".card-body").children[0].innerText.trim();
          var img = reviewItemReviews[review].querySelector(".card-img-top").getAttribute("src").trim().replace("/img/", "/images/").replace("img/", "/images/");
          var reviewContent = reviewItemReviews[review].querySelector(".card-text").innerText.trim();
          reviews.push({
            name: name,
            img: img,
            review: reviewContent,
          });
        }
      }
    }
  }

  return JSON.stringify(reviews, null, 4);
}

console.log(await v3reviewstojson());
