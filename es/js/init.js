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
        "Carne": null,
        "Pescado": null,
        "Vegetariano" : null,
        "Carne y Carne" : null,
        "Carne y Pescado" : null,
        "Carne y Vegetariano" : null,
        "Pescado y Carne" : null,
        "Pescado y Pescado" : null,
        "Pescado y Vegetariano" : null,
        "Vegetariano y Pescado": null,
        "Vegetariano y Carne": null,
        "Vegetariano y Vegetariano" : null,
      },
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
