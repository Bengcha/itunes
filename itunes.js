$(document).ready(function() 
{
    $("#startSearch").click(function() 
    {
        searchMusic();
    });
    var searchMusic = function() 
    {
        var userInput = $("#searchBox").val();
        $.ajax(
        {
            type: "GET",
            dataType: "jsonp",
            url: "https://itunes.apple.com/search?limit=16&term=" + userInput,
            success: function(data) {
            console.log(data)
            getItunesMusicResult(data);

            }
        });
    var getItunesMusicResult = function(data)
{
    var songResults = data.results;
    var display = '';
    for (var i = 0; i < songResults.length; i++) {
        var song = songResults[i];
        var songInformation = {
            songCover: song.artworkUrl100,
            trackName: song.trackName,
            artistViewUrl: song.artistViewUrl,
            artistName: song.artistName,
            audio: song.previewUrl,
            collectionPrice: song.collectionPrice,  
            trackPrice: song.trackPrice         
        };
        songResults[i] = songInformation;
        display += '<li class = "style"><img src=' + songInformation.songCover.replace('100x100', '300x300') + ' />';
        display += '<h6>' +songInformation.trackName +' by <a href="'+ songInformation.artistViewUrl+'" target="_blank">'+ songInformation.artistName +'</a></h6>';
        display += '<h6>Track Price: ' + songInformation.trackPrice + ' | Album Price: $' + songInformation.collectionPrice + '</h6>';
        display += '<h6><br /><audio controls><source src="'+ songInformation.audio +'"type="audio/aac" type="audio/m4a"></audio></h6>';
        display += '</li>'
    }
    $('#displaySongResults').html(display);
};
    }
});
