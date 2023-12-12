document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar-css");
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.style.top = "-120px"; // Hide the navbar
    } else {
      // Scrolling up
      navbar.style.top = "0"; // Show the navbar
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });

  // Set initial position
  navbar.style.top = "0";
});
