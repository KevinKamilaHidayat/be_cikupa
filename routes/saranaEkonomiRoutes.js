const express = require("express");
const router = express.Router();
const controller = require("../controllers/saranaEkonomiController");

router.get("/data-sarana-ekonomi/", controller.getAll);
router.get("/data-sarana-ekonomi/:id", controller.getById);     
router.post("/data-sarana-ekonomi/", controller.create);
router.put("/data-sarana-ekonomi/:id", controller.update);      
router.delete("/data-sarana-ekonomi/:id", controller.remove);  

module.exports = router;
