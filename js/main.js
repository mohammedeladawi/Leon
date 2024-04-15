const showMenu = () => {
  // Extend and Shrink 2nd span in the Toggle Menu
  document
    .querySelector(".header .links .icon span:nth-child(2)")
    .classList.toggle("extend");

  // Show the Menu
  document.querySelector(".header .links").classList.toggle("show");
};
