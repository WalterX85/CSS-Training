const showVideo = document.querySelector(".link-video");
const response = document.querySelector(".linkDispo");



showVideo.addEventListener("mouseenter", () => {
  response.classList.add("linkDispoVisible");
})

showVideo.addEventListener("mouseout", () => {
  response.classList.remove("linkDispoVisible");
})


           marceaaau