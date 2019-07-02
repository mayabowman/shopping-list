$(function() {
    $('#js-shopping-list-form button').on('click', function(event) {
        event.preventDefault();
        const newItem = $('#shopping-list-entry').val();
        const newMarkup = $('li:first').clone(true);
        newMarkup.find('.shopping-item').text(newItem);
        $('.shopping-list').append(newMarkup);
        $('#shopping-list-entry').val('');
    });

    $('.shopping-item-toggle').on('click', function(event) {
        event.preventDefault();
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })

    $('.shopping-item-delete').on('click', function(event) {
        event.preventDefault();
        $(this).closest('li').remove();
    })
})

