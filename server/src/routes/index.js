const { Router } = require("express");

const router = Router();

const countryRouter = require("./countryRouter");
const activitiesRouter = require("./activitiesRouter");

router.use('/countries', countryRouter);
router.use('/activities', activitiesRouter);


module.exports = router;
