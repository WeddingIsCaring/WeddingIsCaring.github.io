(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.tabs').tabs();    
    $('.modal').modal();
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip();
    $('input.autocomplete').autocomplete({
      data: {
        "Meat": null,
        "Fish": null,
        "Vegetarian" : null,
        "Vegan" : null,
        "Vegano" : null,
        "Vegetariano" : null,
        "Carne" : null,
        "Pescado" : null,
      },
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
