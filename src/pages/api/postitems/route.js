const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const PostItem = require("../../../../models/PostItem");
const dbConnect = require("../../../../config/db");

router.use(async (req, res, next) => {
  await dbConnect();
  next();
});

router.get("/", async (req, res) => {
  try {
    const postItems = await PostItem.find();
    res.status(200).json({ success: true, data: postItems });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

//Get a single post by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Fetching post with ID:", id); // Debug log

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.error("Invalid post ID:", id);
      return res
        .status(400)
        .json({ success: false, error: `Invalid post ID: ${id}` });
    }

    const postItem = await PostItem.findById(id);
    if (!postItem) {
      console.error("Post not found with ID:", id);
      return res.status(404).json({ success: false, error: "Post not found" });
    }

    res.status(200).json({ success: true, data: postItem });
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// Update a post by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.error("Invalid post ID:", id);
      return res
        .status(400)
        .json({ success: false, error: `Invalid post ID: ${id}` });
    }

    const postItem = await PostItem.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!postItem) {
      console.error("Post not found with ID:", id);
      return res.status(404).json({ success: false, error: "Post not found" });
    }

    res.status(200).json({ success: true, data: postItem });
  } catch (error) {
    console.error("Error updating post by ID:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const postItem = await PostItem.create(req.body);
    res.status(201).json({ success: true, data: postItem });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Delete a post by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.error("Invalid post ID:", id);
      return res
        .status(400)
        .json({ success: false, error: `Invalid post ID: ${id}` });
    }

    const postItem = await PostItem.findByIdAndDelete(id);
    if (!postItem) {
      console.error("Post not found with ID:", id);
      return res.status(404).json({ success: false, error: "Post not found" });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.error("Error deleting post by ID:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
