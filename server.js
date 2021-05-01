const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;


const htmlRoutes = require('./routes/htmlRoutes/html');
const apiRoutes = require('./routes/apiRoutes/api');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
