"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("artist 1", "album 1");
console.log(album1);
const album2 = make_album("artist 2", "album 1");
console.log(album2);
const album3 = make_album("artist 3", "album 3", 14);
console.log(album3);
