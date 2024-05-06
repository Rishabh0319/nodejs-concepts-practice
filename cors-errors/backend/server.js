import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("server is Ready");
});

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: '1',
            title: 'A joke',
            content: 'this is a joke'
        },
        {
            id: '2',
            title: 'A second Joke',
            content: 'this is second joke'
        },
        {
            id: '3',
            title: 'A third Joke',
            content: 'this is third joke'
        },
        {
            id: '4',
            title: 'a forth joke',
            content: 'this is forth joke'
        },
        {
            id: '5',
            title: 'a fifth joke',
            content: 'this is a fifth joke'
        },
    ];

    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is Running on Port: ${port}`);
});