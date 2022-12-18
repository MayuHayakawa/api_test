
const container = document.querySelector(".cat");

// create and insert html tags(variable name : cardTag) inside div that has class cat(variable name : container)
function getPhotos(images) {
   images.map(image => {
     const cardTag = `<div class="card">
              <img src=${image.src.tiny} />
         </div>`;
     container.innerHTML += cardTag;
   })
}

// Put the keyword you want to search for at the end of the data url(this case is "cat")
fetch("https://api.pexels.com/v1/search?query=cat",{
  headers: {
    // you need get your authorization key (you can get it on pexel site)
    Authorization: "563492ad6f91700001000001396f5c721ae242f7a10c8ac28ad04020"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     getPhotos(data.photos);
   })