const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Serve static files from the 'out' directory
app.use(express.static('out'));

// Route for sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'sitemap.xml'), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
});

// Route for robots.txt
app.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'robots.txt'), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Sitemap: http://localhost:${port}/sitemap.xml`);
  console.log(`Robots.txt: http://localhost:${port}/robots.txt`);
});
