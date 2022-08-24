// function that hides itself, and displays the next sibling on click, used for accordian menus
const openAccordian = (e) => {
  e.target.parentElement.nextSibling.style.display = "flex";
  e.target.parentElement.style.display = "none";
  e.target.parentElement.nextSibling.nextSibling.style.display = "block";
};

const closeAccordian = (e) => {
  e.target.parentElement.previousSibling.style.display = "flex";
  e.target.parentElement.style.display = "none";
  e.target.parentElement.nextSibling.style.display = "none";
};

export { openAccordian, closeAccordian };
