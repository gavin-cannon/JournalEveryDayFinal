const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

// Get all recipes
const getEntries = async (req, res, next) => {
    console.log("In get Recipes");
    try {
        const query = {};
        if (req.query.title) {
            query.title = req.query.title;
        }
        if (req.query.keyword) {
            query.keywords = req.query.keyword;
        }
        const result = await mongodb
            .getDb()
            .db("journalEveryDay")
            .collection("entries")
            .find(query);
        result.toArray().then((lists) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(lists);
        });
    } catch (e) {
        console.log(e);
        res.status(400).json("Error in Get Recipes");
    }
};

const getEntryById = async (req, res, next) => {
    console.log("In get Recipe by ID");
    // console.log(req.params);
    // console.log(req.params._id);
    try {
        if (!req.params["_id"]) {
            console.error("Lack of _id error in get recipe by id");
        }
        let query = { _id: new ObjectId(req.params["_id"]) };

        const result = await mongodb
            .getDb()
            .db("journalEveryDay")
            .collection("entries")
            .find(query);
        result.toArray().then((lists) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(lists);
        });
    } catch (e) {
        console.error(e);
        res.status(400).json("Error in Get Recipe by ID");
    }
};

const postEntries = async (req, res) => {
    const postData = req.body;
    try {
        console.log(req);
        const result = await mongodb
            .getDb()
            .db("journalEveryDay")
            .collection("entries")
            .insertOne(postData);
        res.setHeader("Content-Type", "application/json").status(201).json(result);
    } catch (e) {
        console.log(e);
        res
            .status(400)
            .json(
                "Recipes Post Request: Invalid request data found in request body."
            );
    }
};

module.exports = {
    getEntries,
    getEntryById,
    postEntries
};
