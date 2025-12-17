const express = require("express");
const router = express.Router();
const controller = require("../controllers/wisataController");

router.get("/wisata/", controller.getAll);
router.get("/wisata/:id", controller.getById);
router.post("/wisata/", controller.create);
router.put("/wisata/:id", controller.update);
router.delete("/wisata/:id", controller.remove);
router.post("/wisata/tambah-wisata", controller.tambahwisata);

module.exports = router;
