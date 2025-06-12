//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika humberger diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toggle class active untuk shopping cart
const shoppingBag = document.querySelector(".shopping-bag");
document.querySelector("#shopping-bag-button").onclick = (e) => {
  shoppingBag.classList.toggle("active");
  e.preventDefault();
};

//klik diluar elemen
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
const shoppingBagButton = document.querySelector("#shopping-bag-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (
    !shoppingBagButton.contains(e.target) &&
    !shoppingBag.contains(e.target)
  ) {
    shoppingBag.classList.remove("active");
  }
});

// item detail
const itemDetail = document.querySelector("#item-detail");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((button) => {
  button.onclick = (e) => {
    itemDetail.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetail.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target == itemDetail) {
    itemDetail.style.display = "none";
  }
};
