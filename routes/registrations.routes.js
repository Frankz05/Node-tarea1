const express = require('express');

//Controllers
const {
    getAllRegistrations,
    getRegistration,
    createRegistration,
    updateRegistration,
    deleteRegistration,
} = require('../controllers/registrations.controller');

const registrationRouter = express.Router();

//Endpoints Registrations
registrationRouter.get('/', getAllRegistrations);
registrationRouter.get('/:id', getRegistration);
registrationRouter.post('/', createRegistration);
registrationRouter.patch('/:id', updateRegistration);
registrationRouter.delete('/:id', deleteRegistration);

module.exports = { registrationRouter };
