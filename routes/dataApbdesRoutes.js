const express = require("express");
const router = express.Router();
const controller = require("../controllers/dataApbdesController");

router.get("/data-apbdes/", controller.getAll);
router.get("/data-apbdes/:id", controller.getById);   
router.post("/data-apbdes/", controller.create);
router.put("/data-apbdes/:id", controller.update);   
router.delete("/data-apbdes/:id", controller.remove);     

module.exports = router;
