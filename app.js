const express = require('express');

//Routers
const { registrationRouter } = require('./routes/registrations.routes');

const app = express();

app.use(express.json());

//Endpoints Registrations
app.use('/api/v1/registrations', registrationRouter);

app.all('*', (req, res) => {
    res.status(404).json({
        data: {
            status: 'error',
            message: `${req.method} ${req.url} does not exists in our server`,
        },
    });
});

module.exports = { app };
