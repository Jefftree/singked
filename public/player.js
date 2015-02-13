   $(function() {
      $(".queue-video").click(function() {
        var name = $("input#name").val();
        addVideo(name);
        /*addedVideo(name);*/
        /*player.cueVideoById(name);
        player.playVideo();
        sendMessage(name);*/
        $('.queue-vid').val("");
      });

      $(".skip-song").click(function (){
        nextVideo();
      });
    });


      //User input here
      
      var videoIDarray = [];
      var seeking = 0;
      var firstLoad = 1;



  function playingVideo (){
    // Tell other players that video is playing
    socket.emit('playVideo', player.getCurrentTime());
    // Seek to location        
    if (firstLoad == 1){ 
      player.seekTo(seeking);
      firstLoad = 0;
    }
    socket.emit('videoStarted')
  }
  
  function pauseVideo() {
    player.pauseVideo();
    socket.emit('pauseVideo', player.getCurrentTime());
  }    

  // Skips to next Video. Still buggy
  function nextVideo (){
      player.cueVideoById(videoIDarray.shift());
      $('.luke').children().first().remove();
      socket.emit('videoDone'); 
      playingVideo();
  } 

  function addedVideo (videoList){
     console.log(videoList);
    var video = videoList[0];
    if ($('.luke').children().length > 0) {
      $('.luke').children().remove();
    }
    for (var i = 0 ; i < videoList.length; i++) {
      $( "<li class=\"list-group-item\"><a href=\"https://www.youtube.com/watch?v="+ videoList[i] + "\">" + videoList[i] + "</a></li>").appendTo('.luke');
    }
    videoIDarray = videoList.slice();
    console.log(videoIDarray);
  }


 function provideVideoTime (time){
  seeking = time;
 }

  socket.on('getCurVideoTime', function(){
    socket.emit('loadVideoTime',player.getCurrentTime());
  });