import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})
