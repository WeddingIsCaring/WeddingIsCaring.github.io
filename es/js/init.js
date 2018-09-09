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
        "Meat and Meat" : null,
        "Meat and Fish" : null,
        "Meat and Vegetarian" : null,
        "Fish and Meat" : null,
        "Fish and Fish" : null,
        "Fish and Vegetarian" : null,
        "Vegetarian and Fish": null,
        "Vegetarian and Meat": null,
        "Vegetarian and Vegetarian" : null,
      },
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
