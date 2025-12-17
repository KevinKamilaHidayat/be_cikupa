const express = require("express");
const multer = require("multer");
const controller = require("../controllers/koperasiController");
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/koperasi/", controller.getAll);
router.post("/koperasi/", controller.tambahkoperasi);
router.get("/koperasi/:id", controller.getById);
router.put("/koperasi/:id", controller.update);
router.delete("/koperasi/:id", controller.remove);

module.exports = router;
