document.querySelectorAll(".gallery .thumbnail img").forEach(img =>
  img.addEventListener("click", function(e) {
    document.querySelector(".current-image").classList.remove("current-image");
    document.querySelector(".current img").src = e.target.src;
    e.target.parentElement.classList.add("current-image");
  }),
);

document.querySelector(".gallery").addEventListener("wheel", function(e) {
  if (e.wheelDelta < 0) {
    document.querySelector(".gallery").scrollLeft += 60;
  } else {
    document.querySelector(".gallery").scrollLeft -= 60;
  }
  console.log(e);
});
