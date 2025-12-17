const supabase = require("../supabaseClient");

exports.getAll = async (req, res) => {
  const { data, error } = await req.supabase
    .from("data_penduduk")
    .select("*, sls(*)"); 
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};
exports.getAllDomisili = async (req, res) => {
  const { data, error } = await req.supabase
    .from("domisili")
    .select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await req.supabase
    .from("data_penduduk")
    .select("*")
    .eq("id_data_penduduk", id)
    .single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};
exports.getByIdDomisili = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await req.supabase
    .from("domisili")
    .select("*")
    .eq("kode_sls", id)
    .single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.create = async (req, res) => {
  const newData = req.body;
  const { data, error } = await req.supabase
    .from("data_penduduk")
    .insert([newData])
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};
exports.createDomisili = async (req, res) => {
  const newData = req.body;
  const { kode_sls } = newData;

  // Cek apakah kode_sls sudah ada
  const { data: existingData, error: checkError } = await req.supabase
    .from("domisili")
    .select("*")
    .eq("kode_sls", kode_sls)
    .maybeSingle();

  if (checkError) return res.status(500).json({ error: checkError.message });

  if (existingData) {
    return res.status(409).json({ error: "kode_sls sudah ada" });
  }

  // Insert data baru
  const { data, error } = await req.supabase
    .from("domisili")
    .insert([newData])
    .select();

  if (error) return res.status(400).json({ error: error.message });

  res.json(data[0]);
};


exports.update = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const { data, error } = await req.supabase
    .from("data_penduduk")
    .update(updatedData)
    .eq("id_data_penduduk", id)
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};
// (Contoh dalam Express/Supabase untuk update)
exports.updateDomisili = async (req, res) => {
  const id = req.params.id;
  const { kode_sls, rw, rt, koordinat } = req.body;

  // Cek apakah kode_sls sudah digunakan oleh entri lain
  const { data: existing, error: checkError } = await req.supabase
    .from("domisili")
    .select("kode_sls")
    .eq("kode_sls", kode_sls)
    .neq("kode_sls", id) // <--- pastikan bukan milik yang sedang diedit
    .maybeSingle();

  if (checkError) return res.status(500).json({ error: checkError.message });

  if (existing) {
    return res.status(409).json({ error: "kode_sls sudah digunakan" });
  }

  // Lanjut update
  const { data, error } = await req.supabase
    .from("domisili")
    .update({ rw, rt, koordinat, kode_sls })
    .eq("kode_sls", id) // id diambil dari route param
    .select();

  if (error) return res.status(400).json({ error: error.message });

  res.json(data[0]);
};


exports.remove = async (req, res) => {
  const { id } = req.params;
  const { error } = await req.supabase
    .from("data_penduduk")
    .delete()
    .eq("id_data_penduduk", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Deleted successfully" });
};

exports.removeDomisili = async (req, res) => {
  const { id } = req.params;
  const { error } = await req.supabase
    .from("domisili")
    .delete()
    .eq("kode_sls", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Deleted successfully" });
};
