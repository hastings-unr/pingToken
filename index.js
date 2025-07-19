const express = require('express')
const app = express()
const port = 3000
app.use(express.json()); 
app.use(express.static(__dirname+'/public'))

app.get('*', (req, res) => {
    console.log("GET *"); //console.log(req)
  res.json(token)
})
  
app.put('*', (req, res) => {
  const fs = require('fs').promises
  async function writeFile(data) {
   try {
    await fs.writeFile('public/token.json', JSON.stringify(data, null, 2), 'utf8');
    console.log('File created successfully');
   } catch (err) {
    console.error('Error writing file:', err);
   }
  }
    const token = req.body; // The parsed JSON data is in req.body
    console.log('PUT:', token);
    writeFile(token)
    res.status(201).json({ message: 'Token created successfully', item: token });
  //res.json(token)
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
