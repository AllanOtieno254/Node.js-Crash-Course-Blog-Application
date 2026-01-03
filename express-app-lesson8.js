const express=require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//express app
const app=express();

//connect to mongodb
// const dbURI ='mongodb+srv://kimkim:test1234@nodetutorial-main.sjltjby.mongodb.net/blogDB?retryWrites=true&w=majority';

mongoose.connect(dbURI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(3000, () => {
      console.log('🚀 Server running on port 3000');
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
  });


//register view engine
app.set('view engine','ejs');
app.set('views', 'Request-and-Response/views');


//middleware and static files
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); //to parse form data
app.use(express.static('Request-and-Response/public'));

//mongoose and mongo sandbox routes
//adding a new blog
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'New Blog Post',
//         snippet: 'About my new blog post',
//         body: 'More about my new blog post'
//     });

//     blog.save()
//         .then(result => {
//             res.send(result);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// });

// //finding all blogs
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then(blogs => {
//             res.send(blogs);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// });

// //finding a single blog by id
// app.get('/single-blog', (req, res) => {
//     Blog.findById('64a7f3f4f1d2c8b1e5a4d2c3')
//         .then(blog => {
//             res.send(blog);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// });

//All routes
app.get('/',(req,res)=>{
    // res.send('<h1>Home Page</h1>');
    // res.sendFile('Request-and-Response/views/index.html',{root:__dirname});
    // const blogs=[
    //     {title:'Yoshi finds eggs', snippet:'Lorem ipsum dolor sit amet consectetur'},
    //     {title:'Mario finds stars', snippet:'Lorem ipsum dolor sit amet consectetur'},
    //     {title:'How to defeat bowser', snippet:'Lorem ipsum dolor sit amet consectetur'}
    // ];
    // res.render('index', {title:'Home', blogs: blogs});

    res.redirect('/blogs');
});

//Routing and HTML Pages
app.get('/about',(req,res)=>{
    // res.send('<h1>About Page</h1>');
    // res.sendFile('Request-and-Response/views/about.html',{root:__dirname});
    res.render('about', {title:'About'});
})

//REDIRECTS AND 404 PAGES

// redirect from /about-me to /about
app.get('/about-me',(req,res)=>{
    res.redirect('/about'); //302 by default
    // res.redirect(301,'/about'); //for permanent redirection
})

//blogs page routes
app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt:-1})
        .then((result)=>{
            res.render('index' ,{title:'All Blogs', blogs: result});
        }
        )
    .catch((err)=>{
        console.log(err);
    });

});

//POST request to create a new blog
app.post('/blogs', (req, res) => {
    console.log(req.body); // 👈 ADD THIS

    const blog = new Blog(req.body);

    blog.save()
        .then(() => {
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
        .then(result=>{
            res.render('details' ,{blog:result, title:'Blog Details'});
        })
        .catch(err=>{
            console.log(err);
        });
});

app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});


app.get('/blogs/create',(req,res)=>{
    // res.send('<h1>Blogs Page</h1>');
    // res.sendFile('Request-and-Response/views/blogs.html',{root:__dirname});
    res.render('create' ,{title:'Create a new Blog'});
});

// 404 page
app.use((req,res)=>{
    // res.status(404).sendFile('Request-and-Response/views/404.html',{root:__dirname});
    res.status(404).render('404' ,{title:'404'});
})

// VIEW ENGINES
// we use ejs engines : install it by npm i ejs
//ejs is going to be our view engine and used to create our templates