const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const disabilitiesRouter = require("./disabilities/router")

router.use("/disabilities", disabilitiesRouter);

const sectorsRouter = require("./sectors/router")

router.use("/sectors", sectorsRouter);

const offersRouter = require("./offers/router")

router.use("/offers", offersRouter);
/* ************************************************************************* */

module.exports = router;
