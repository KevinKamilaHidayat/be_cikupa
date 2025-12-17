const express = require("express");
const router = express.Router();
const controller = require("../controllers/kunjunganController");

router.post('/kunjungan', controller.catatKunjungan);
router.get('/statistik', controller.getStatistik);
router.get('/device', controller.getDeviceStatistik);


module.exports = router;
