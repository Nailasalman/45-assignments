// Question no 40:Album:Write a function called make_album () that builds a object describing a music album.The
// function shuold take in an artis name and an album title, and it should return a Object containing these two 
//piece of information.Use the function to make three dictionaires representing different albums.print each return 
// value to show that Object are storing the album information correctly. Add an optional parameter to make_album()
// that allows you to store the number of tracks on an album.If the calling line includes a value for the album's
// Object.Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Album 12"));
