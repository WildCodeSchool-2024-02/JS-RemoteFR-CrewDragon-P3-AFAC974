const express = require("express");

const { hashPwd } = require("../../../services/authMiddleware");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { login, register } = require("../../../controllers/authActions");

// Route to get a list of items
router.post("/login", login);

// Route to get a specific item by ID
router.post("/register", hashPwd, register);

/* ************************************************************************* */

module.exports = router;
