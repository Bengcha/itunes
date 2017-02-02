$(document).ready(function() 
{
    $("#startSearch").click(function() 
    {
        searchMusic();
    });

    var searchMusic = function() {
        var userInput = $("#searchBox").val();
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: "https://itunes.apple.com/search?term=" + userInput,
            success: function(data) {
            $("#searchBox").val("");
            displayMusicInformation();

            }
        });
    }
});

function displayMusicInformation()
{
    var information = val();
    information = $(".musicImage")

}