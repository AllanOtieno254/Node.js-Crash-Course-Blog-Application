const fs = require('fs'); //fs: file system. this is the 1st thing we need to import for these file operations to be performed

//Reading files
// fs.readFile('./doc/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });



//2.writing files
fs.writeFile('./docs/blog1.txt','Hello, World! Allan Is the best data scientist', () => {
    console.log('File was written');
}
);

// nb: if the file doesnt exist it will create it automatically
fs.writeFile('./docs/blog2.txt','Hello, World! This is blog2', () => {
    console.log('File was written but new file');
}
);


//3.directories
// making directory

if (!fs.existsSync('./assets')) {
  // create directory
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  // remove directory
  fs.rmdir('./assets',(err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('folder removed');
  });
}


//4.deleting files
if (fs.existsSync('./docs/blog2.txt')) {
  fs.unlink('./docs/blog2.txt', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('file deleted');
  });
}

