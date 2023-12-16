document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopButton = document.getElementById("scroll-to-top");
  var header = document.querySelector(".header");

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function toggleScrollToTopButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
      header.style.backgroundColor = "bisque"; // Change to pink (#FFC0CB) when scrolled down
    } else {
      scrollToTopButton.style.display = "none";
      header.style.backgroundColor = "white"; // Change back to white when not scrolled
    }
  }

  scrollToTopButton.addEventListener("click", scrollToTop);

  window.onscroll = function () {
    toggleScrollToTopButton();
  };
});
