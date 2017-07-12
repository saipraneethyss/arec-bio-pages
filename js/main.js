$(document).ready(function()
{
    var navItems = $('.admin-menu li > a');
    var homeicon=$('.home-icon a')
    var navListItems = $('.admin-menu li');
    var allWells = $('.admin-content');
    var allWellsExceptFirst = $('.admin-content:not(:first)');
    
    allWellsExceptFirst.hide();
    navItems.click(function(e)
    {
        e.preventDefault();
        navListItems.removeClass('active');
        $(this).closest('li').addClass('active');
        
        allWells.hide();
        var target = $(this).attr('data-target-id');
        $('#' + target).show();
    });
    homeicon.click(function(e)
    {
        e.preventDefault();
        allWells.hide();
        var target = $(this).attr('data-target-id');
        $('#' + target).show();
    });
});

$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');
        $('.admin-menu li').on('click', function () {
        var $currentMenuItem = $('.button-label'),
        currentText = $('a', this).text();

    $currentMenuItem.text(currentText);
});

});



