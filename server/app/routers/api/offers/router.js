const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, browseFilter } = require("../../../controllers/offerActions");

// Route to get a list of items
router.get("/", browse);

router.post("/filter", browseFilter);

/* ************************************************************************* */

module.exports = router;
