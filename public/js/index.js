const socket = io();

socket.on('connect', function() {
    console.log('connected to server');
    // socket.emit('createMessage', {
    //     from:'me',
    //     text:'hello server!'
    // });
});

socket.on('newMessage',function (newMessage) {
   console.log('newMessage', JSON.stringify(newMessage, undefined, 2));
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

