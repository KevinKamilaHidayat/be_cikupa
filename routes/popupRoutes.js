const express = require("express");
const router = express.Router();
const controller = require("../controllers/popupController");

router.post("/popup/", controller.tambahpopup);
router.get("/popup/", controller.getAll);
router.get("/popup/:id", controller.getById);
router.put("/popup/:id", controller.update);
router.delete("/popup/:id", controller.remove);

module.exports = router;
