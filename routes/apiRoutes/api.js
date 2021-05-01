const router = require('express').Router();
let noteJson = require('../../Develop/db/db.json')
const uniqid = require('uniqid');
const { validate, write } = require('../../Develop/notes')


router.get('/notes', (req, res) => {
    res.json(noteJson);
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid();

    res.json(write(req, notes));
});


// router.delete('/notes/:id', (req, res) => {

// });
module.exports = router;