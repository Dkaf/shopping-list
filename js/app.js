$(document).ready(function (){
  $('form').on('click', 'button', function(event) {
    event.preventDefault();
    var newItem = $('.clone li').clone()
    newItem.find('.shopping-item').html($('#shopping-list-entry').val());
    $('.shopping-list').append(newItem);
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function () {
    var itemChecked = $(this).parent().siblings('.shopping-item')
    itemChecked.toggleClass('shopping-item__checked');
  })

  $('.shopping-list').on('click', '.shopping-item-delete', function (){
    $(this).closest('li').remove();
  })
});
