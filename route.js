const express = require('express');
const router = express.Router();
const ctrldock =require("./control") 

router.get("/stuff", ctrldock.dock);

module.exports = router