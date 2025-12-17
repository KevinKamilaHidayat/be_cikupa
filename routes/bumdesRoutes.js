const express = require("express");
const multer = require("multer");
const controller = require("../controllers/bumdesController");
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/bumdes/", controller.getAll);
router.post("/bumdes/", controller.tambahbumdes);
router.get("/bumdes/:id", controller.getById);
router.put("/bumdes/:id", controller.update);
router.delete("/bumdes/:id", controller.remove);

module.exports = router;
