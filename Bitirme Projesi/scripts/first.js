document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopButton = document.getElementById("scroll-to-top");

  function scrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }

  function toggleScrollToTopButton() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopButton.style.display = "block";
      } else {
          scrollToTopButton.style.display = "none";
      }
  }

  scrollToTopButton.addEventListener("click", scrollToTop);

  window.onscroll = function () {
      toggleScrollToTopButton();
  };
});
