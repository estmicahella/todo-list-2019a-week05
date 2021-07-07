// create to do List
// enable user input
// enable removing list item
// keep count of displayed items

  $('#toDo').submit(function(event) {
    event.preventDefault();
    console.log('event', event);
    console.log($('#input').val())
  })

  $('#addItem').on('click', function(){
    var toDoItem = $('input').val()
    $('ul').append('<li>' + toDoItem + '</li>');
    var itemCount = $('ul').children().length;
    $('#itemCount').html(`List Item Count: ${itemCount}`);

    $('li').on('click',function(){
      $(this).remove()
      var itemCount = $('ul').children().length;
      $('#itemCount').html(`List Item Count: ${itemCount}`);
    })
  })

  $('#deleteItems').on('click',function(){
    $('li').remove()
    var itemCount = $('ul').children().length;
    $('#itemCount').html(`List Item Count: ${itemCount}`);
  })
