const router = require('express').Router();
const { uniqid } = require('uniqid');
let notes = require('../../Develop/db/db.json')

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid();


});


// router.delete('/notes/:id', (req, res) => {

// });
module.exports = router;