// Define the variables
const navbarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// Build the navigation bar
sections.forEach(section => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
  navbarList.appendChild(listItem);
});

// Smooth scroll for navigation links
navbarList.addEventListener("click", (event) => {
  if (event.target.nodeName === "A") {
    event.preventDefault();
    const targetSection = document.querySelector(event.target.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
});

// Detect the active section and update the corresponding navigation link
const setActiveSection = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const link = document.querySelector(`a[href="#${section.id}"]`);
    if (rect.top >= -50 && rect.top <= 200) {
      section.classList.add("your-active-class");
      link.classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      link.classList.remove("active");
    }
  });
};

// Add event listener to update the active section on scroll
document.addEventListener("scroll", setActiveSection);
