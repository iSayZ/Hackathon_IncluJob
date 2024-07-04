// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const offers = await tables.offer.readAll();

    // Respond with the items in JSON format
    res.json(offers);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const offer = await tables.offer.read(req.params.id);
    
    // If the offer is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the offer in JSON format
    if (offer == null) {
      res.sendStatus(404);
    } else {
      res.json(offer);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browseFilter = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const offers = await tables.offer.readByFilter(req);

    // Respond with the items in JSON format
    res.json(offers);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  read,
  browseFilter
};
