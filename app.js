const express = require("express"); // here we are loading express package
const app = express(); // here we are initializing express

app.use(express.static("public")); // serve static files (css and images)

app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/views/index.html")
} );

app.get('/About', (req, res) =>{
    res.sendFile(__dirname + "/views/About.html")
} );

app.get('/Works', (req, res) =>{
    res.sendFile(__dirname + "/views/Works.html")
} );

app.get('/PhotoGallery', (req, res) =>{
    res.sendFile(__dirname + "/views/PhotoGallery.html")
} );

app.listen(3000, () => { 
    console.log('listening on port 300');
});

