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