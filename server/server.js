const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.use(express.urlencoded({extended: true}));

const taskRouter = require('./routes/task.router.js');

app.use('/tasks', taskRouter);

app.listen(port, () => {
    console.log('listening on port', port);
})