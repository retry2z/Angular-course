const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
    return mongoose.connect(config.dbURL);
};