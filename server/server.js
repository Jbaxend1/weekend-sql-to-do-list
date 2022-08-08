const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.use(express.urlencoded({extended: true}));

let taskList = [
    {
     task: 'Do the Laundry'   
    },
    {
     task: 'Mow the lawn'
    }
]

app.get('/tasks', (req, res) => {
    res.send(taskList);
});

app.listen(port, () => {
    console.log('listening on port', port);
})