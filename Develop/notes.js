const fs = require('fs');
const path = require('path');



validate = note => {

    if (!note.text || !note.title) {
        return false;
    }
    return true;
};

write = (note, noteArr) => {
    
    let noteObj = {title: note.title, message: note.body, id: note.id};
    noteArr.push(noteObj);

    fs.writeFileSync(
        path.join(__dirname, 'db/db.json'),
        JSON.stringify(noteArr)
    );
};


// deleteNote = id => {

// }
module.exports = { validate, write };