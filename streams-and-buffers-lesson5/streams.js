//This methods is only good if we are using small files which are not well detailed

// streams: start using data before it has finished loading

const fs = require('fs'); //fs: file system. this is the 1st thing we need to import for these file operations to be performed


// READ STREAMS
// const readstream=fs.createReadStream('../docs/blog3.txt', {encoding: 'utf8'});
// readstream.on('data',(chunk) => {
//     console.log('-----NEW CHUNK-----');
    // console.log(chunk.toString());
//     console.log(chunk);
// }
// );

// we are using createReadStream method to read large files in chunks instead of reading the whole file at once which can be inefficient for large files
// the 'data' event is emitted when a chunk of data is available to be read from the stream
// the chunk parameter represents the piece of data that has been read from the stream
// we convert the chunk to a string using toString() method before logging it to the console


// WRITE STREAMS
// const readstream=fs.createReadStream('../docs/blog3.txt', {encoding: 'utf8'});
// const writestream=fs.createWriteStream('../docs/blog4.txt', {encoding: 'utf8'});
// readstream.on('data',(chunk) => {
//     console.log('-----NEW CHUNK WRITE-----');
//     console.log(chunk);
//     writestream.write('Hello, World! This is blog4 data being written in chunks. \n');
//     writestream.write('This is the 2nd chunk of data being written. \n');
//     writestream.write('This is the 3rd chunk of data being written. \n');
     // writestream.write(chunk) // uncomment this line if you want to write the actual chunk data to the file. inshot adding data from blog 3 to blog4
// }
// );

// here we are creating a read stream to read data from blog4.txt file and a write stream to write data to the same file
// as we read each chunk of data from the read stream, we write some additional data to the write stream followed by the chunk itself
// this way we can write data to a file in chunks instead of writing the whole file at once



// PIPING STREAMS
// PIPE:  Passing data from readable to writable string hence it makes it easier to write the write stream in shorter form
//WHEN WE USE PIPE IT SHOULD BE FROM READABLE STRING TO WRITE renderToString

const readstream=fs.createReadStream('../docs/blog3.txt', {encoding: 'utf8'});
const writestream=fs.createWriteStream('../docs/blog4.txt', {encoding: 'utf8'});
readstream.pipe(writestream);

// here we are using the pipe method to pass data from the read stream to the write stream
// this way we can write data to a file in chunks without having to manually handle the 'data' event and write each chunk individually