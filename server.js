const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'api working',
        message: 'welcome to the file converter application'
    })
});

const PORT = 3000;

app.listen(PORT, 'localhost', () =>{
    console.log(`Listening to requests on port ${PORT}`);
});

module.exports = app;