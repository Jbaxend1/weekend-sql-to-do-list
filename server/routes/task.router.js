const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log('in GET / tasks');

    const queryText = 'SELECT * FROM "tasks" ORDER BY "id";';

    pool.query(queryText).then((result) => {
        console.log('SELECT success.');
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET /tasks', error);
        res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
    const taskToAdd = req.body;
    const queryText = `INSERT INTO "tasks" ("item", "completed") VALUES ($1, $2);`

    // console.log(req.body);

    pool.query(queryText, [taskToAdd.task, taskToAdd.completed])
        .then((results) => {
            console.log(results);
            res.send(results);
        })
        .catch((error) => {
            console.log('Error in POST /tasks', error);
            res.sendStatus(500);
        });
})

router.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    const queryText = `DELETE FROM "tasks" WHERE "id" = $1;`;

    pool.query(queryText, [taskId]).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
    })
})

router.put('/:id', (req, res) => {
    const taskId = req.params.id;

    // console.log(taskId);

    const queryText = `UPDATE "tasks" SET "completed" = 'TRUE' WHERE "id" = $1;`;

    pool.query(queryText, [taskId])
        .then((results) => {
            res.sendStatus(200);
        }).catch((error) => {
            res.sendStatus(500);
        });
})

// ALWAYS REMEMBER THIS...
module.exports = router;