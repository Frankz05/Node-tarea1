const { app } = require('./app');
const { db } = require('./utils/database.util');

const startServer = async () => {
    try {
        db.authenticate();
        db.sync();

        const PORT = 6000;

        app.listen(PORT, () => {
            console.log('Express app runing');
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();
