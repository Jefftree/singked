

  var $messages = '69'; 

  // Prompt for setting a username


  var socket = io();


  var videoid2 = "2";

      // Sends a chat message
    function sendMessage (video) {
      // tell server to execute 'new message' and send along one parameter
      //$( "<p>Test2</p>").appendTo('.luke');
      socket.emit('videoid', video);
    }





  // Whenever the server emits 'typing', show the typing message
  socket.on('videoid', function (data) {
    $( "<p>Got em</p>").appendTo('.luke'); 
    player.cueVideoById(data);
    player.playVideo();
  });
