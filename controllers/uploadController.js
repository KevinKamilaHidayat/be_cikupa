const supabase = require("../supabaseClient");

exports.uploadFoto = async function (req, res) {
  const file = req.file;

  if (!file)
    return res.status(400).json({ error: "Tidak ada file yang diupload" });

  const fileExt = file.originalname.split(".").pop();
  const fileName = `pengguna/foto_pengguna_${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("desacikupa")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) return res.status(500).json({ error: error.message });

  const url = `https://ativysenubpjviwimbrd.supabase.co/storage/v1/object/public/desacikupa/${fileName}`;

  res.json({ url });
};

exports.uploadProduk = async function (req, res) {
  const file = req.file;

  if (!file)
    return res.status(400).json({ error: "Tidak ada file yang diupload" });

  const fileExt = file.originalname.split(".").pop();
  const fileName = `produk/produk_${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("desacikupa")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) return res.status(500).json({ error: error.message });

  const url = `https://ativysenubpjviwimbrd.supabase.co/storage/v1/object/public/desacikupa/${fileName}`;

  res.json({ url });
};

exports.uploadBumdes = async function (req, res) {
  const file = req.file;

  if (!file)
    return res.status(400).json({ error: "Tidak ada file yang diupload" });

  const fileExt = file.originalname.split(".").pop();
  const fileName = `bumdes/bumdes_${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("desacikupa")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) return res.status(500).json({ error: error.message });

  const url = `https://ativysenubpjviwimbrd.supabase.co/storage/v1/object/public/desacikupa/${fileName}`;

  res.json({ url });
};

exports.uploadInvestasi = async function (req, res) {
  const file = req.file;

  if (!file)
    return res.status(400).json({ error: "Tidak ada file yang diupload" });

  const fileExt = file.originalname.split(".").pop();
  const fileName = `investasi/investasi_${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("desacikupa")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) return res.status(500).json({ error: error.message });

  const url = `https://ativysenubpjviwimbrd.supabase.co/storage/v1/object/public/desacikupa/${fileName}`;

  res.json({ url });
};

exports.uploadFotoStaff = async function (req, res) {
  const file = req.file;

  if (!file)
    return res.status(400).json({ error: "Tidak ada file yang diupload" });

  const fileExt = file.originalname.split(".").pop();
  const fileName = `strukturorganisasi/foto_staff_${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("desacikupa")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) return res.status(500).json({ error: error.message });

  const url = `https://ativysenubpjviwimbrd.supabase.co/storage/v1/object/public/desacikupa/${fileName}`;

  res.json({ url });
};

exports.uploadBanner = async function (req, res) {
  const file = req.file;

  if (!file)
    return res.status(400).json({ error: "Tidak ada file yang diupload" });

  const fileExt = file.originalname.split(".").pop();
  const fileName = `banner/banner_${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("desacikupa")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) return res.status(500).json({ error: error.message });

  const url = `https://ativysenubpjviwimbrd.supabase.co/storage/v1/object/public/desacikupa/${fileName}`;

  res.json({ url });
};

exports.uploadGaleri = async function (req, res) {
  const file = req.file;
  if (!file)
    return res.status(400).json({ error: "Tidak ada file yang diupload" });

  const fileExt = file.originalname.split(".").pop();
  const fileName = `galeri/galeri_${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("desacikupa")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) return res.status(500).json({ error: error.message });

  const url = `https://ativysenubpjviwimbrd.supabase.co/storage/v1/object/public/desacikupa/${fileName}`;
  res.json({ url });
};

exports.uploadPopup = async function (req, res) {
  const file = req.file;
  if (!file)
    return res.status(400).json({ error: "Tidak ada file yang diupload" });

  const fileExt = file.originalname.split(".").pop();
  const fileName = `popup/popup_${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("desacikupa")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) return res.status(500).json({ error: error.message });

  const url = `https://ativysenubpjviwimbrd.supabase.co/storage/v1/object/public/desacikupa/${fileName}`;
  res.json({ url });
};

exports.uploadBerita = async function (req, res) {
  const file = req.file;
  if (!file)
    return res.status(400).json({ error: "Tidak ada file yang diupload" });

  const fileExt = file.originalname.split(".").pop();
  const fileName = `berita/berita_${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("desacikupa")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) return res.status(500).json({ error: error.message });

  const url = `https://ativysenubpjviwimbrd.supabase.co/storage/v1/object/public/desacikupa/${fileName}`;
  res.json({ url });
};

exports.uploadBagan = async function (req, res) {
  const file = req.file;
  if (!file)
    return res.status(400).json({ error: "Tidak ada file yang diupload" });

  const fileExt = file.originalname.split(".").pop();
  const fileName = `strukturorganisasi/bagan_${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("desacikupa")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) return res.status(500).json({ error: error.message });

  const url = `https://ativysenubpjviwimbrd.supabase.co/storage/v1/object/public/desacikupa/${fileName}`;
  res.json({ url });
};

exports.uploadLogo = async function (req, res) {
  const file = req.file;
  if (!file)
    return res.status(400).json({ error: "Tidak ada file yang diupload" });

  const fileExt = file.originalname.split(".").pop();
  const fileName = `logo/logo_${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("desacikupa")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) return res.status(500).json({ error: error.message });

  const url = `https://ativysenubpjviwimbrd.supabase.co/storage/v1/object/public/desacikupa/${fileName}`;
  res.json({ url });
};

exports.uploadPengaduan = async function (req, res) {
  const file = req.file;
  if (!file)
    return res.status(400).json({ error: "Tidak ada file yang diupload" });

  const fileExt = file.originalname.split(".").pop();
  const fileName = `pengaduan/pengaduan_${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("desacikupa")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) return res.status(500).json({ error: error.message });

  const url = `https://ativysenubpjviwimbrd.supabase.co/storage/v1/object/public/desacikupa/${fileName}`;
  res.json({ url });
};

exports.uploadKoperasi = async function (req, res) {
  const file = req.file;
  if (!file)
    return res.status(400).json({ error: "Tidak ada file yang diupload" });

  const fileExt = file.originalname.split(".").pop();
  const fileName = `koperasi/koperasi_${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("desacikupa")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) return res.status(500).json({ error: error.message });

  const url = `https://ativysenubpjviwimbrd.supabase.co/storage/v1/object/public/desacikupa/${fileName}`;
  res.json({ url });
};

exports.uploadWisata = async function (req, res) {
  const file = req.file;
  if (!file)
    return res.status(400).json({ error: "Tidak ada file yang diupload" });

  const fileExt = file.originalname.split(".").pop();
  const fileName = `wisata/wisata_${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("desacikupa")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) return res.status(500).json({ error: error.message });

  const url = `https://ativysenubpjviwimbrd.supabase.co/storage/v1/object/public/desacikupa/${fileName}`;
  res.json({ url });
};
