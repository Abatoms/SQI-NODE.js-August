const express = require("express");
const {
  getAllUsers,
  getSingleUser,
  getSingleUserByFirstName,
} = require("./../controllers/user");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/profile", getSingleUserByFirstName);
router.get("/:id", getSingleUser);

module.exports = router;
