

  var socket = io();


  var videoid2 = "2";

      // Sends a chat message
    function sendMessage (video) {
      // tell server to execute 'new message' and send along one parameter
      //$( "<p>Test2</p>").appendTo('.luke');
      socket.emit('videoid', video);
    }

    function addVideo (video) {
      // tell server to execute 'new message' and send along one parameter
      //$( "<p>Test2</p>").appendTo('.luke');
      socket.emit('add video', video);
    }


  // Whenever the server emits 'typing', show the typing message
  socket.on('videoid', function (data) {
    /*$( "<p>Got em</p>").appendTo('.luke'); */
    player.cueVideoById(data);
    player.playVideo();
  });

  socket.on('pause', function (data) {
    /*$( "<p>Got em 2</p>").appendTo('.luke');*/
    if ((player.getPlayerState() != YT.PlayerState.BUFFERING) &&
        (player.getPlayerState() != YT.PlayerState.PAUSED) &&
        ((player.getCurrentTime() > (data + 3)) ||
        (player.getCurrentTime() < (data + 6)))) {
      player.pauseVideo();
      player.seekTo(data);
      player.pauseVideo();
    } else {
      player.pauseVideo();
    };
    

  });

  socket.on('play', function (){
    /*$( "<p>Got em 3</p>").appendTo('.luke');*/ 
      player.playVideo();
    
  });

  socket.on('added video', function (video) {
    addedVideo(video);
  });


