const validateCoords = (req, res, next) => {
    const { latitude, longitude } = req.params;

    if (!latitude || !longitude || isNaN(Number(latitude)) || isNaN(Number(longitude))) {
        return res.status(400).send('Invalid latitude or longitude. Both should be numbers.');
    }

    if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
        return res.status(400).send('Invalid latitude or longitude. Latitude must be between -90 and 90. Longitude must be between -180 and 180.');
    }

    next();
};

module.exports = validateCoords;
