const express = require('express')
const app = express()
const path = require('path')
const data = require('./testplace.json')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '\\testindex.html'))
})

app.get('/pic', (req, res) => {
    const nextIndex = req.query.index;

    for(i = 0; i < data[0].content[0].hallway.length; i++) {
        hallway = data[0].content[0].hallway

        if(hallway[i].value == nextIndex) {
            return res.sendFile(path.join(__dirname + hallway[i].path))
        }

    }

})

app.get('/start', (req, res) => {
    const picPath = path.join(__dirname + '/pics/upstairs_entrace.jpg')
    res.sendFile(picPath)
})

app.get('/jsondatastart', (req, res) => {

    for(i = 0; i < data[0].content[0].hallway.length; i++) {
        hallway = data[0].content[0].hallway

        if(hallway[i].value === 1) {
            res.json(hallway[i])
        }

    }

})

app.get('/picinfo', (req, res) => {
    const index = req.query.index

    for(i = 0; i < data[0].content[0].hallway.length; i++) {
        hallway = data[0].content[0].hallway
        if(hallway[i].value == index) {
            res.json(hallway[i])
        }

    }
})

app.listen(3000, () => {
    console.log('Server online on port 3000...')
})