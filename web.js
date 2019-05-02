var express = require('express');
var app = express();

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

app.use(express.static('build')); //set directory with static files

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log('Listening on Port ' + PORT);
})