const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url, req.method);

    //sending response
    //set header content type
    res.setHeader('Content-Type','text/plain');
    res.write('Hello World!');
    res.end();

    // if i want to send html
    //  res.setHeader('Content-Type','text/html');
    //  res.write('<p>Hello we are sending html response</p>')
    //  res.end();
    // });

server.listen(3000,'localhost',()=>{
    console.log('Listening for requests on port 3000');
});
})



