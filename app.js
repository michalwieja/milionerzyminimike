const express = require('express')
const game = require('./js/game')

const app = express();
app.use(express.static(__dirname + '/public'))

app.listen('3000', () => {
    console.log('http://localhost:3000')
})

game(app);