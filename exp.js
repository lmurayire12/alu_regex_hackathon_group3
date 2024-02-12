
const movieTitlePattern = /[\w\s]+ \(\d{4}\)/g;
const songLyricsPattern = /\[Verse \d+\] .*/g;
const twitterUsernamePattern = /@[\w\d]+/g;
const isbnPattern = /ISBN \d{3}-\d-\d{3}-\d{5}-\d/g;
const jokePattern = /Why did the .* ? Because.*/g;
const episodeTitlePattern = /[\w\s]+ S\d{2}E\d{2}: .*/g;
const datePattern = /\d{2}-[A-Za-z]{3}-\d{4}/g;
const hexColorPattern = /#[A-Fa-f\d]{6}/g;
const ipAddressPattern = /\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/g;

const movieTitles = stringResponse.match(movieTitlePattern);
const songLyrics = stringResponse.match(songLyricsPattern);
const twitterUsernames = stringResponse.match(twitterUsernamePattern);
const isbnNumbers = stringResponse.match(isbnPattern);
const jokes = stringResponse.match(jokePattern);
const episodeTitles = stringResponse.match(episodeTitlePattern);
const dates = stringResponse.match(datePattern);
const hexColors = stringResponse.match(hexColorPattern);
const ipAddresses = stringResponse.match(ipAddressPattern);

console.log("Movie Titles:", movieTitles);
console.log("Song Lyrics:", songLyrics);
console.log("Twitter Usernames:", twitterUsernames);
console.log("ISBN Numbers:", isbnNumbers);
console.log("Jokes:", jokes);
console.log("Episode Titles:", episodeTitles);
console.log("Dates:", dates);
console.log("Hex Color Codes:", hexColors);
console.log("IP Addresses:", ipAddresses);
