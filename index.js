require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { createClient } = require("@supabase/supabase-js");

// ===== DEBUG ENV (PENTING) =====
console.log("ENV CHECK:", {
  SUPABASE_URL: !!process.env.SUPABASE_URL,
  SUPABASE_KEY: !!process.env.SUPABASE_KEY,
  JWT_SECRET: !!process.env.JWT_SECRET,
  PORT: process.env.PORT
});

const app = express();

// ===== MIDDLEWARE =====
app.use(cookieParser());
app.use(cors({
  origin: true,          // 🔥 allow Railway & FE domain
  credentials: true
}));
app.use(express.json());

// ===== HEALTH CHECK (WAJIB DI RAILWAY) =====
app.get("/", (req, res) => {
  res.send("Backend Cikupa OK");
});

// ===== SUPABASE INIT (AMAN) =====
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  console.error("❌ SUPABASE ENV MISSING");
  process.exit(1);
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.use((req, res, next) => {
  req.supabase = supabase;
  next();
});

// ===== ROUTES (DIBUNGKUS TRY-CATCH) =====
try {
  app.use("/api", require("./routes/authRoutes"));
  app.use("/api", require("./routes/uploadRoutes"));
  app.use("/api", require("./routes/penggunaRoutes"));
  app.use("/api", require("./routes/informasiDesaRoutes"));
  app.use("/api", require("./routes/strukturOrganisasiRoutes"));
  app.use("/api", require("./routes/bannerRoutes"));
  app.use("/api", require("./routes/produkRoutes"));
  app.use("/api", require("./routes/koperasiRoutes"));
  app.use("/api", require("./routes/investasiRoutes"));
  app.use("/api", require("./routes/bumdesRoutes"));
  app.use("/api", require("./routes/alamatKantorRoutes"));
  app.use("/api", require("./routes/lokasiDesaRoutes"));
  app.use("/api", require("./routes/tentangDesaRoutes"));
  app.use("/api", require("./routes/galeriDesaRoutes"));
  app.use("/api", require("./routes/beritaRoutes"));
  app.use("/api", require("./routes/wisataRoutes"));
  app.use("/api", require("./routes/dataPerumahanRoutes"));
  app.use("/api", require("./routes/dataPendudukRoutes"));
  app.use("/api", require("./routes/pengaduanRoutes"));
  app.use("/api", require("./routes/dataAgamaRoutes"));
  app.use("/api", require("./routes/dataPerkawinanRoutes"));
  app.use("/api", require("./routes/dataPekerjaanRoutes"));
  app.use("/api", require("./routes/dataUmurPendudukRoutes"));
  app.use("/api", require("./routes/dataApbdesRoutes"));
  app.use("/api", require("./routes/dataPendidikanRoutes"));
  app.use("/api", require("./routes/saranaOlahragaRoutes"));
  app.use("/api", require("./routes/saranaKesehatanRoutes"));
  app.use("/api", require("./routes/saranaKeagamaanRoutes"));
  app.use("/api", require("./routes/saranaPendidikanRoutes"));
  app.use("/api", require("./routes/saranaEkonomiRoutes"));
  app.use("/api", require("./routes/popupRoutes"));
  app.use("/api", require("./routes/kunjunganRoutes"));
} catch (err) {
  console.error("❌ ROUTE ERROR:", err);
}

// ===== START SERVER =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("✅ SERVER RUNNING ON PORT:", PORT);
});
