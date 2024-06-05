$(document).ready(function () {
    // Menu mobile: abre o menu
    $(".header-menu-mobile-icone").click(function () {
      $(".header-menu-mobile").toggleClass("active");
    });
  
    // Menu mobile: fecha o menu
    $(".header-menu-mobile-fechar").click(function () {
      $(".header-menu-mobile").toggleClass("active");
    });
  
    // Fecha o menu ao clicar em um item de menu
    $(".header-menu li").click(function () {
      $(".header-menu-mobile").removeClass("active");
    });
  });
  