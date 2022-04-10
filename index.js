const express = require('express');

const server = express();

server.use(express.json());

const movies = ['Matrix','Spiderman','Batman'];

//return a movie by array position
server.get('/movies/:index', (req,res) => {
    const { index } = req.params;

    return res.json(movies[index]);
});

//return all movies of a array
server.get('/movies', (req, res) =>{
    return res.json(movies);
})

//create a movie
server.post('/movies', (req, res) => {
    const { name } = req.body;
    movies.push(name);

    return res.json(movies);
})

//update a movie
server.put('/movies/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    movies[index] = name;

    return res.json(movies);
})

//delete a movie
server.delete('/movies/:index', (req, res) => {
    const { index } = req.params;

    movies.splice(index, 1);
    return res.json({message:"O filme foi deletado"});
})


server.listen(3000);