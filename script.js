const boxContent = document.getElementById("box-content");
const loadImgBtn = document.getElementById("load-images-btn");
const loadSecondaryImgBtn = document.getElementById("load-secondary-img");
const hideBtn = document.querySelectorAll(".hideBtn");

function loadImages() {
  fetch("https://api.pexels.com/v1/search?query=cats", {
    headers: {
      Authorization: "563492ad6f91700001000001fba4c85510f843c985b4d7e17ce1431e",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((cats) => {
      for (let i = 0; i < 9; i++) {
        boxContent.innerHTML += `
        <div class="col-md-4">
             <div class="card mb-4 shadow-sm">
             <img class="bd-placeholder-img card-img-top"
             width="100%"
             height="225" src="${cats.photos[i].src.landscape}" alt="">
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
                     <button
                       type="button"
                       class="btn btn-sm btn-outline-secondary"
                     >
                       View
                     </button>
                     <button
                       type="button"
                       class="btn btn-sm btn-outline-secondary hideBtn"
                     >
                       Hide
                     </button>
                   </div>
                   <small class="text-muted">${cats.photos[i].id}</small>
                 </div>
               </div>
             </div>
           </div>
     `;
      }
      {
      }
    });
  console.log(hideBtn);
}

function loadSecondaryImg() {
  fetch("https://api.pexels.com/v1/search?query=dogs", {
    headers: {
      Authorization: "563492ad6f91700001000001fba4c85510f843c985b4d7e17ce1431e",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((dogs) => {
      for (let i = 0; i < 9; i++) {
        boxContent.innerHTML += `

        <div class="col-md-4">
             <div class="card mb-4 shadow-sm">
             <img class="bd-placeholder-img card-img-top"
             width="100%"
             height="225" src="${dogs.photos[i].src.landscape}" alt="">
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
                     <button
                       type="button"
                       class="btn btn-sm btn-outline-secondary"
                     >
                       View
                     </button>
                     <button
                       type="button"
                       class="btn btn-sm btn-outline-secondary hideBtn"
                      
                     >
                       Hide
                     </button>
                   </div>
                   <small class="text-muted">${dogs.photos[i].id}</small>
                 </div>
               </div>
             </div>
           </div>
  
     `;
      }
    });
}

loadImgBtn.addEventListener("click", loadImages);
loadSecondaryImgBtn.addEventListener("click", loadSecondaryImg);
