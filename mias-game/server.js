const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
const app = express();
const port = 443;

// Load SSL certificate and key
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve the game.html file
app.get('/funtime', (req, res) => {
  res.sendFile(path.join(__dirname, 'game.html'));
});

// Endpoint to get list of .m4a files
app.get('/songs', (req, res) => {
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory');
    }
    const m4aFiles = files.filter((file) => path.extname(file) === '.m4a');
    res.json(m4aFiles);
  });
});

// Create HTTPS server
https.createServer(options, app).listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
