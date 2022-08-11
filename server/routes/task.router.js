const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log('in GET / tasks');

    const queryText = 'SELECT * FROM "tasks";';

    pool.query(queryText).then((result) => {
        console.log('SELECT success.');
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET /tasks', error);
        res.sendStatus(500);
    })
});

// router.post('/tasks', (req, res) => {
//     const task = req.body;
//     console.log(req.body);

//     taskList.push(task);
//     res.send(task);
// })



// ALWAYS REMEMBER THIS...
module.exports = router;