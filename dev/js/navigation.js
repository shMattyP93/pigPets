
var isVisible = false;
var $burger = $('#menu-burger');
var $menu = $('#menu-mobile-list');


function menuToggle(){

    $menu.toggleClass("menu-mobile-list-activate");
    $burger.toggleClass("menu-mobile-burger-activate");


}

$burger.on("click", menuToggle);
