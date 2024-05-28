const courseImage = document.querySelector(
    ".quality-education__course-image img"
);
const socialIcons = document.querySelector(".course-image__social-icons");

courseImage.addEventListener("mouseenter", () => {
    socialIcons.classList.remove("hidden");
    socialIcons.classList.remove("opacity-0");
});
courseImage.addEventListener("mouseleave", () => {
    socialIcons.classList.add("hidden");
    socialIcons.classList.add("opacity-0");
});
