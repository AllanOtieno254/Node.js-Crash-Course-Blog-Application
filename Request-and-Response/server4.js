// BASIC PAGE ROUTING

//Returning HTML Pages

const http= require('http');
const fs= require('fs');

const server=http.createServer((req,res)=>{
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type','text/html');

    let path='./views/';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
            //Redirect to the above incase in future you change name from about-me to about
        case '/about-me':
            path+='about.html';
            res.statusCode=301; //we use 301 for permanent redirection
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path+='404.html';
            res.statusCode=404;
            break;
    }

    //send an html file
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
});

server.listen(3000,'localhost',()=>{
    console.log('Listening for requests on port 3000');
});

// status codes: describe the type of response being sent to the client i.e browser
// 200: OK - the request was successful and the server is sending back the requested resource
// 404: Not Found - the requested resource could not be found on the server
// 500: Internal Server Error - the server encountered an unexpected condition that prevented it from fulfilling the request
// 301: Moved Permanently - the requested resource has been permanently moved to a new URL


