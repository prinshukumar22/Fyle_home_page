let currentIndex = 1;
const images = ["./assets/1.png", "./assets/image.png", "./assets/3.png"];

const mainImage = document.getElementById("mainImage");
const contentItems = document.querySelectorAll(".list");

function changeContent(index) {
  contentItems[currentIndex].classList.remove("true");
  contentItems[index].classList.add("true");
  currentIndex = index;

  mainImage.style.opacity = 0;
  setTimeout(() => {
    mainImage.src = images[index];
    mainImage.style.transform = "translateY(-10px)";
    mainImage.style.opacity = 1;
    setTimeout(() => {
      mainImage.style.transform = "translateY(0)";
    }, 300);
  }, 300);
}
