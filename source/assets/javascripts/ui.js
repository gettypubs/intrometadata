function offCanvasNav() {
  var $sidebar = $(".nav-sidebar");
  var $menuButton = $("#navbar-menu");
  var $closeButton = $("#nav-menu-close");
  var $curtain = $(".sliding-panel-fade-screen");

  $menuButton.on("click", function() {
    $sidebar.toggleClass("visible");
    $curtain.toggleClass("visible");
    // Force css repaint to deal with webkit "losing" the menu contents
    // on mobile devices
    $('<style></style>').appendTo($(document.body)).remove();
  });

  $closeButton.on("click", function() {
    $sidebar.removeClass("visible");
    $curtain.removeClass("visible");
  });

  $curtain.on("click", function() {
    $sidebar.removeClass("visible");
    $curtain.removeClass("visible");
  });

  // bind escape key to menu close if menu is open
  $(document).keydown(function(event) {
    if (event.which === 27 && $sidebar.hasClass("visible")) {
      $sidebar.removeClass("visible");
      $curtain.removeClass("visible");
    }
  });
}

function expanderSetup() {
  var $expanderContent  = $(".expander-content");
  var $expanderTriggers = $(".expander-trigger");

  $($expanderContent).addClass("expander--hidden");

  $expanderTriggers.on("click", function() {
    var $target = $(this).parent().find(".expander-content");
    $target.slideToggle("fast", function() {
      $target.toggleClass("expander--hidden");
    });
  });
}

// Call the other setup functions inside of this setup function
// Call this function inside of $(document).ready();
function uiSetup() {
  offCanvasNav();
  expanderSetup();
}
