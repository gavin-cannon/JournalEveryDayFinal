const express = require("express");
const router = express.Router({ mergeParams: true });
const entriesController = require("../controllers/entries");

router.get("/", entriesController.getEntries);
router.get("/:id", entriesController.getEntryById);
router.post("/", entriesController.postEntries);

module.exports = router;