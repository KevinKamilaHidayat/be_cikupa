const express = require("express");
const router = express.Router();
const controller = require("../controllers/dataPerumahanController");
// disabilitas
router.get("/data-disabilitas/", controller.getAllDisabilitas);
router.get("/data-disabilitas/:id", controller.getByIdDisabilitas);     
router.post("/data-disabilitas/", controller.createDisabilitas);
router.put("/data-disabilitas/:id", controller.updateDisabilitas);      
router.delete("/data-disabilitas/:id", controller.removeDisabilitas);  
// bantuan
router.get("/data-bantuan/", controller.getAllBantuan);
router.get("/data-bantuan/:id", controller.getByIdBantuan);     
router.post("/data-bantuan/", controller.createBantuan);
router.put("/data-bantuan/:id", controller.updateBantuan);      
router.delete("/data-bantuan/:id", controller.removeBantuan);  
// bangunan
router.get("/data-bangunan/tahun", controller.getBangunanByTahun);
router.get("/data-bangunan/", controller.getAllBangunan);
router.get("/data-bangunan/:id", controller.getByIdBangunan);     
router.post("/data-bangunan/", controller.createBangunan);
router.put("/data-bangunan/:id", controller.updateBangunan);      
router.delete("/data-bangunan/:id", controller.removeBangunan);  
// ternak
router.get("/data-ternak/tahun", controller.getTernakByTahun);
router.get("/data-ternak/", controller.getAllTernak);
router.get("/data-ternak/:id", controller.getByIdTernak);     
router.post("/data-ternak/", controller.createTernak);
router.put("/data-ternak/:id", controller.updateTernak);      
router.delete("/data-ternak/:id", controller.removeTernak);  

module.exports = router;
