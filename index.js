if (window.matchMedia("(max-width: 767px)").matches) {
  // $("#projectCollapse").mouseleave(function() {
  //   $("#projectCollapse").fadeOut('slow');
  // });
} else {
  $(".showProjectLine").hover(function() {
    /* Stuff to do when the mouse enters the element */
    $("#projectCollapse").fadeIn('slow');
  }, function() {
    /* Stuff to do when the mouse leaves the element */
    $("#projectCollapse").mouseleave(function() {
      $("#projectCollapse").fadeOut('slow');
    });
  });
}
