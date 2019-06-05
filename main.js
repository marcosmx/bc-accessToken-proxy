const express = require('express')
const token = require('./token')
const app = express()
const port = 8080

app.use(express.json())
app.post('/proxy/accessToken', (req, res) => {
  token(req.body.clientId, req.body.secret, (err, response, body)=>{
    if (err) {
      res.status(response.statusCode).send('There was an error');
      return;
    }
    res.send(body);
  })
})

app.listen(port, ()=> console.log('Running on port:', port))
