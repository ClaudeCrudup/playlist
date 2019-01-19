/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Do You Love What You Feel", "Over Like A Fat Rat", "Inside Out", "I'm Caught Up (In a One Night Love Affair)", "Haven't You Heard", "I'm In Love", "All This Love That I'm Giving"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var imageLinks= [
    "https://media.giphy.com/media/3oz8xWxPz2g3Hqd9lK/giphy.gif",
    "http://www.nippertown.com/zeblog/wp-content/uploads/2014/12/Fonda-Rae.jpg",
    "https://i.ytimg.com/vi/HrkvzmVrX50/maxresdefault.jpg",
    "https://soundsoftheuniverse.com/img/VG8zUnd0enhPN1daNk9qbDR1US9RZz09/inner-life-inner-life.jpg",
    "https://ichef.bbci.co.uk/images/ic/960x540/p01bqv39.jpg",
    "http://www.recordsbymail.com/uploads/9-22-15-3/21775.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/A1L7L7fFLtL._SL1000_.png"
    ];
var artists = ["Chaka Kahn","Fonda Rae", "Oddessy", "Inner Life", "Patrice", "Evelyn 'Champagne' King","Gwen McCrae"];
var songLengths = ["10:09","8:10","6:42","9:40", "8:40", "7:04","5:33"];
var links = [
    "https://youtu.be/GRoiUKGoJcM",
    "https://youtu.be/gQSFlZ2oXCA",
    "https://youtu.be/LIXK6u2bHTg",
    "https://youtu.be/uq6HQG-cce0",
    "https://youtu.be/-Gp_nttUNhs",
    "https://youtu.be/EVKzwVpT6fc",
    "https://youtu.be/Kc-eb3S5m9k"
    ];

    // BELOW Use forEach Loop to display the data from each of your array's in the correct div


function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    artists.forEach(function(artist){
        $('#artists').append("<p>" + artist + "</p>");
    });
    
    imageLinks.forEach(function(image){
        $("#images").append("<img src=\"" + image + "\">");
    });
    
    songLengths.forEach(function(length){
        $("#lengths").append("<p>" + length + "</p>");
    });
    
    links.forEach(function(link){
        $("#links").append("<a href=\"" + link+ "\" > Listen </a>");
    });
}


function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
    // Use jQuery to empty all of the remaining divs
}


function addSongInfo(){
    var songName = $("#song").val();
    var image = $("#image").val();
    var artistName = $("#artist").val();
    var songLength = $("#length").val();
    var link = $("#link").val();
    
    songs.push(songName);
    imageLinks.push(image);
    artists.push(artistName);
    songLengths.push(songLength);
    links.push(link);
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();




