const express = require("express");
const multer = require("multer");
const controller = require("../controllers/investasiController");
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/investasi/", controller.getAll);
router.post("/investasi/", controller.tambahinvestasi);
router.get("/investasi/:id", controller.getById);
router.put("/investasi/:id", controller.update);
router.delete("/investasi/:id", controller.remove);

module.exports = router;
