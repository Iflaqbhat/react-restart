const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  addNote,
  getNotes
} = require(
  "../controllers/noteController"
);


// Protected Route

router.post(
  "/add",
  authMiddleware,
  addNote
);

router.get(
  "/all",
  authMiddleware,
  getNotes
);

module.exports = router;