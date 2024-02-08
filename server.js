const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/saveCharacter', (req, res) => {
    const character = req.body;
    fs.writeFile('character.json', JSON.stringify(character), (err) => {
        if (err) {
            res.status(500).json({ message: 'Error saving character' });
        } else {
            res.json({ message: 'Character saved successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
