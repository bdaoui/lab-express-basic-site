const express = require("express"); // here we are loading express package
const app = express(); // here we are initializing express

app.use(express.static("public")); // serve static files (css and images)

app.get('/', (req, res) =>{
    res.send("home page")
} );

app.listen(3000, () => { 
    console.log('listening on port 300!');
});

