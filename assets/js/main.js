// ======DASHBOARD======

$(document).ready(function () {
  $(".dropdown").click(function () {
    $(this)
      .toggleClass("dropdown-active")
      .siblings()
      .removeClass("dropdown-active");
    //$(this).next(".sub-menu-list").toggleClass("sub_menu_active");
  });
  $(".das-menu-list > ul > li > a").click(function () {
    $("ul.sub-menu-list").not($(this).siblings()).slideUp();
    $(this).siblings("ul.sub-menu-list").slideToggle();
  });

  $(".menu-toggle").click(function () {
    $(this).toggleClass("menu-toggle-active");
    $(".dashboardo-block").toggleClass("dashboardo-block-active");
    $(".full-page").toggleClass("full-page-active");
    $(".logo-menu").toggleClass("logo-menu-open");
  });
  
  // =====ADMIN-DROPDOWN=====
  
 $(document).ready(function () {
   $(".dropdown").click(function () {
     $(this).find(".js-dropdown-list").slideToggle("3000");
   });
 });
 $(document).on("click", function (event) {
   var $trigger = $(".dropdown");
   if ($trigger !== event.target && !$trigger.has(event.target).length) {
     $(".js-dropdown-list").slideUp("3000");
   }
 });

});
           
