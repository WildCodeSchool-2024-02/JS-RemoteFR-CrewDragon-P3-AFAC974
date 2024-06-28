const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const authRouter = require("./auth/router");

router.use("/items", itemsRouter);
router.use("/auth", authRouter);

/* ************************************************************************* */

module.exports = router;
