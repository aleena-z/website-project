const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

// USERS ROUTES
router.get("/users", adminController.getUsers);
router.delete("/users/:id", adminController.deleteUser);
router.put("/users/:id", adminController.updateUser);
router.get("/search", adminController.searchUsers);

module.exports = router;