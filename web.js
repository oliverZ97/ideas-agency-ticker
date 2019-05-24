var express = require('express');
var app = express();

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
} else {
    app.use(express.static('dist')); //set directory with static files
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log('Listening on Port ' + PORT);
})