const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/**
 * Mes routes
 */

const authRouter = require("./auth/router");
const artworkRouter = require("./artwork/router");
const categoryRouter = require("./category/router");
const rolesRouter = require("./roles/router");
const userRouter = require("./user/router");

router.use("/auth", authRouter);
router.use("/artwork", artworkRouter);
router.use("/category", categoryRouter);
router.use("/roles", rolesRouter);
router.use("/user", userRouter);

/* ************************************************************************* */

module.exports = router;
