const socket = io();

socket.on('connect', function() {
    console.log('connected to server');
    // socket.emit('createMessage', {
    //     from:'me',
    //     text:'hello server!'
    // });
});

socket.on('newMessage',function (message) {
   console.log('newMessage', JSON.stringify(message, undefined, 2));
   var li = jQuery('<li></li>');
   li.text(`${message.from}: ${message.text}`);
   jQuery('#messages').append(li);
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {

    });
});
