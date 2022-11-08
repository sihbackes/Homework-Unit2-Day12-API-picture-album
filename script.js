const boxContent = document.getElementById("box-content");
let boxContentCarousel = document.getElementById("box-content-carousel");
const loadImgBtn = document.getElementById("load-images-btn");
const loadSecondaryImgBtn = document.getElementById("load-secondary-img");
const hideBtn = document.querySelectorAll(".hideBtn");
const searchBtn = document.getElementById("button-addon2");
const inputSearch = document.getElementById("input-search");

function loadImages(search) {
  fetch(`https://api.pexels.com/v1/search?query=${search}`, {
    headers: {
      Authorization: "563492ad6f91700001000001fba4c85510f843c985b4d7e17ce1431e",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((element) => {
      boxContent.innerHTML = "";
      for (let i = 0; i < 9; i++) {
        boxContent.innerHTML += `
        <div class="col-md-4 box-card">
              <div class="card mb-4 shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src="${element.photos[i].src.landscape}"
                  alt=""
                />
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#modal${element.photos[i].id}">
                    View
                  </button>

                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        onclick="hideImage(event)"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${element.photos[i].id}</small>
                  </div>
                </div>
              </div>
            </div>

            <!-- Button trigger modal -->


              <!-- Modal -->
              <div class="modal fade" id="modal${element.photos[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    <img
                    class="bd-placeholder-img card-img-top"
                    width="100%"
                    height="300"
                    src="${element.photos[i].src.landscape}"
                    alt=""
                  />
                    </div>
                  </div>
                </div>
              </div>
     `;
      }
      {
      }
    });
}

function hideImage(event) {
  let card = event.target.closest(".box-card");
  card.classList.add("d-none");
}

function searchImage() {
  let element = inputSearch.value;
  loadImages(element);
}

function loadCarousel() {
  fetch(`https://api.pexels.com/v1/search?query=forest`, {
    headers: {
      Authorization: "563492ad6f91700001000001fba4c85510f843c985b4d7e17ce1431e",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((element) => {
      boxContentCarousel.innerHTML = "";

      boxContentCarousel.innerHTML += `
      <div
id="carouselExampleControls"
class="carousel slide"
data-ride="carousel"
>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img
    src="${element.photos[6].src.landscape}
      class="d-block w-100 image-carousel"
      alt="..."
    />
  </div>
  <div class="carousel-item">
    <img
    src="${element.photos[8].src.landscape}
      class="d-block w-100 image-carousel"
      alt="..."
    />
  </div>
  <div class="carousel-item">
    <img
    src="${element.photos[9].src.landscape}
      class="d-block w-100 image-carousel"
      alt="..."
    />
  </div>
</div>
<button
  class="carousel-control-prev"
  type="button"
  data-target="#carouselExampleControls"
  data-slide="prev"
>
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</button>
<button
  class="carousel-control-next"
  type="button"
  data-target="#carouselExampleControls"
  data-slide="next"
>
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</button>
</div>
     `;

      {
      }
    });
}

loadImgBtn.addEventListener("click", () => loadImages("cats"));
loadSecondaryImgBtn.addEventListener("click", () => loadImages("dogs"));
searchBtn.addEventListener("click", () => searchImage());

window.onload = (event) => {
  loadCarousel();
};
