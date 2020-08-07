const router = require("express").Router();

const customRouter = require("../helpers/router.js");

router.get("/", (req, res) => {
    res.status(200).json({ router: "api" });
});

router.use("/", customRouter);

module.exports = router;