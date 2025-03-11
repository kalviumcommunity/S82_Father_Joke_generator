const express = require("express");
const router = express.Router();
const ObjectModel = require("./Client/schema"); 


router.get("/", (req, res) => {
  const dbState = require("mongoose").connection.readyState;
  res.send(dbState === 1 ? "Connected to Database" : "Not Connected to Database");
});


router.post("/objects", async (req, res) => {
  try {
    res.status(201).json(await new ObjectModel(req.body).save());
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get("/objects", async (req, res) => {
  try {
    res.json(await ObjectModel.find());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get("/objects/:id", async (req, res) => {
  try {
    const object = await ObjectModel.findById(req.params.id);
    if (!object) return res.status(404).json({ message: "Object not found" });
    res.json(object);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.put("/objects/:id", async (req, res) => {
  try {
    const updatedObject = await ObjectModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedObject) return res.status(404).json({ message: "Object not found" });
    res.json(updatedObject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.delete("/objects/:id", async (req, res) => {
  try {
    const deletedObject = await ObjectModel.findByIdAndDelete(req.params.id);
    if (!deletedObject) return res.status(404).json({ message: "Object not found" });
    res.json({ message: "Object deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



router.get("/ping", (req, res) => res.send("hello world"));

module.exports = router;
