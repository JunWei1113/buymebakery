let slideIndex = 0;
const slides = document.querySelectorAll(".slide__item");
const prev = document.querySelector(".slide__arraw--prev");
const next = document.querySelector(".slide__arraw--next");
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
showSlide(slideIndex);