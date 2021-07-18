const API_KEY = 'ENTER YOUR API';
var url =
  "https://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  "apiKey="+ API_KEY;
var request = new Request(url);

const newsList = document.getElementById("root");
fetch(request)
  .then((response) => response.json())
  .then(function (data) {
    let apiData = data.articles;
    const htmlString = apiData.map(function (news) {
      return `
      <div class="d-flex justify-content-center">
        <a href="${news.url}">
          <div class="card mb-3" style="max-width: 1000px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="${news.urlToImage}"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${news.title}</h5>
                  <p class="card-text">${news.description}</p>
                  <p class="card-text">
                    <small class="text-muted">${news.publishedAt.substring(0, 10)}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
        `;
    });
    newsList.innerHTML = htmlString;
  })
  .catch(function (error) {
    console.log(error);
  });