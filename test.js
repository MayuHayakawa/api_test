
const container = document.querySelector(".cat");

function getPhotos(images) {
   images.map(image => {
     const cardTag = `<div class="card">
              <img src=${image.src.tiny} />
         </div>`;
     container.innerHTML += cardTag;
   })
}

// 探したいキーワードを末尾に(今回はcat)
fetch("https://api.pexels.com/v1/search?query=cat",{
  headers: {
    Authorization: "563492ad6f91700001000001396f5c721ae242f7a10c8ac28ad04020"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     getPhotos(data.photos);
   })