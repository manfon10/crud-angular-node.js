const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Base de datos Contectada.');
    } catch (error) {
        console.log(error);
        console.log(1); //Detenemos la app.
    }
}

module.exports = conectarDB;