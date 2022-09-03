//Models
const { Registration } = require('../models/registration.model');

const getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.findAll();

        res.status(200).json({
            status: 'success',
            data: {
                registrations: registrations,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

const getRegistration = async (req, res) => {
    try {
        const { id } = req.params;

        const registration = await Registration.findOne({
            where: { id },
        });

        if (!registration) {
            return (
                res.status(404),
                json({
                    status: 'error',
                    message: 'Registration not found',
                })
            );
        }

        res.status(200).json({
            status: 'success',
            data: {
                registration,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

const createRegistration = async (req, res) => {
    try {
        const { entranceTime, exitTime } = req.body;

        const newRegistration = await Registration.create({
            entranceTime,
            exitTime,
        });

        res.status(201).json({
            status: 'success',
            data: { newRegistration },
        });
    } catch (error) {
        console.log(error);
    }
};

const updateRegistration = async (req, res) => {
    try {
        const { exitTime } = req.body;
        const { id } = req.params;

        const registration = await Registration.findOne({ where: { id } });

        if (!registration) {
            return res.status(404).json({
                status: 'error',
                message: 'Registration not found',
            });
        }

        await registration.update({
            exitTime,
            status: 'out',
        });

        res.status(200).json({
            status: 'success',
            data: { registration },
        });
    } catch (error) {
        console.log(error);
    }
};

const deleteRegistration = async (req, res) => {
    try {
        const { id } = req.params;

        const registration = await Registration.findOne({ where: { id } });

        if (!registration) {
            return res.status(404).json({
                status: 'error',
                message: 'Post not found',
            });
        }

        await registration.update({ status: 'cancelled' });

        res.status(204).json({ status: 'success' });
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    getAllRegistrations,
    getRegistration,
    createRegistration,
    updateRegistration,
    deleteRegistration,
};
