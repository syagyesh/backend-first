import express from 'express';
import 'dotenv/config'

const app = new express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});


app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Debugging",
            "description": "The process of fixing a bug in your code while simultaneously creating two more bugs."
        },
        {
            "id": 2,
            "title": "99 bugs",
            "description": "99 little bugs in the code, 99 bugs in the code, take one down, patch it around, 127 bugs in the code."
        },
        {
            "id": 3,
            "title": "Software updates",
            "description": "Software updates are like taking out the trash. If you don't do it often, your house (or computer) will start to stink."
        },
        {
            "id": 4,
            "title": "Code comments",
            "description": "Code without comments is like a joke without a punchline – nobody gets it."
        },
        {
            "id": 5,
            "title": "Compiling",
            "description": "Compiling is like waiting for paint to dry, except you can't admire the end result."
        },
        {
            "id": 6,
            "title": "Documentation",
            "description": "Writing documentation is like flossing your teeth. Everyone knows they should do it, but nobody does."
        }
    ]
    res.send(jokes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});