const musicData = require("./data.json");
// console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */
function getAllArtistNames(artists) {
  return artists.map(artist => artist.name);
}

/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */
function getAllAlbumTitles(artists) {
  const albumTitles = [];

  for (let artist of artists) {
      if (artist.albums && Array.isArray(artist.albums)) {
          for (const album of artist.albums) {
              if (album.title) {
                  albumTitles.push(album.title);
              }
          }
      }
  }
  return albumTitles;
}

/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */
function getAllSongs(artists) {
  const albumSongs = [];

  for (let artist of artists) {
    for (let album of artist.albums) {
      if (album.songs && Array.isArray(album.songs)) {
        albumSongs.push(...album.songs);
      }
    }
  }
  return albumSongs;
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */
function simpleCheckerBoard() {
  const size = 8;
  let checkerboard = "";

  for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
          let lightSquare = (i + j) % 2 === 0;

        checkerboard += lightSquare ? " " : "#";
      }

      checkerboard += "\n";
  }

  return checkerboard;
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ]- An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */
function dynamicCheckerBoard(rows = 4, cols = 4) {
  let checkerboard = "";

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let lightSquare = (i + j) % 2 === 0;
      checkerboard += lightSquare ? " " : "#";
    }
    checkerboard+= "\n";
  }
  return checkerboard;
}

/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */
function createChessBoard() {
  let chessboard = [];
  let size = 8;

  for (let i = size - 1; i >= 0; i--) {
    let row = [];
    for (let j = 0; j < size; j++) {
      let lightSquare = (i + j) % 2 === 0;
      let squareColor = lightSquare ? `dark` : `light`;

      let square = {
        piece: null, 
        positionX: size - i - 1,
        positionY: j,
        color: squareColor,
      };
      row.push(square);
    }
    chessboard.push(row);
  }
  return chessboard;
}

/**
 * Update a square on the board to have a chess piece "on" it
 * @param {string} piece - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} row - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} column - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @return {Object{}}  The modified board array of objects.
 */
function addPieceToChessBoard(piece, row, column) {
  let chessboard = [];
  let size = 8;

  for (let i = size - 1; i >= 0; i--) {
    let rowsArray = [];
    for (let j = 0; j < size; j++) {
      let lightSquare = (i + j) % 2 === 0;
      let squareColor = lightSquare ? `dark` : `light`;

      let square = {
        piece: null, 
        positionX: size - i - 1,
        positionY: j,
        color: squareColor,
      };
      rowsArray.push(square);
    }
    chessboard.push(rowsArray);
  }
  chessboard[row][column]["piece"] = piece;
  return chessboard;
}

module.exports = {
  getAllArtistNames,
  getAllAlbumTitles,
  getAllSongs,
  simpleCheckerBoard,
  dynamicCheckerBoard,
  createChessBoard,
  addPieceToChessBoard,
};
