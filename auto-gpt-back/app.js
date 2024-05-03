import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
import { getAllAIs, getEvals, getTechnology, createEval } from './database.js';

const PORT = 4001;

// Add your routes here
app.get('/ais', async (req, res)=> {
    const AIs = await getAllAIs();
    res.send(AIs);
});

app.get('/ai/:id', async (req, res)=> {
    const name = req.params.id;
    const AI = await getTechnology(name);
    if (AI) res.send(AI);
    else res.status(404).send('Expression not found');
});

app.get('/reviews/:id', async (req, res)=> {
    const name = req.params.id;
    const reviews = await getEvals(name);
    if (reviews) res.send(reviews);
    else res.status(404).send('Expression not found');
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/reviews', async (req, res) => {
    const newReview = createEval( req.body.note, req.body.comment, req.body.date, req.body.AI);
    if (newReview) {
        res.status(201).send(newReview);
    } else {
        res.status(400).send('Invalid review');
    }
});


//Start the server listening on PORT here
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
});
