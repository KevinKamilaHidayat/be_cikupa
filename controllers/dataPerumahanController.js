// DIsabilitas

exports.getAllDisabilitas = async (req, res) => {
  const { data, error } = await req.supabase
    .from("data_disabilitas")
    .select("*, sls(*)");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.getByIdDisabilitas = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await req.supabase
    .from("data_disabilitas")
    .select("*")
    .eq("id_data_disabilitas", id)
    .single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.createDisabilitas = async (req, res) => {
  const newData = req.body;
  const { data, error } = await req.supabase
    .from("data_disabilitas")
    .insert([newData])
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.updateDisabilitas = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const { data, error } = await req.supabase
    .from("data_disabilitas")
    .update(updatedData)
    .eq("id_data_disabilitas", id)
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.removeDisabilitas = async (req, res) => {
  const { id } = req.params;
  const { error } = await req.supabase
    .from("data_disabilitas")
    .delete()
    .eq("id_data_disabilitas", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Deleted successfully" });
};

// Program Bantuan

exports.getAllBantuan = async (req, res) => {
  const { data, error } = await req.supabase
    .from("data_program_bantuan")
    .select("*, sls(*)");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.getByIdBantuan = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await req.supabase
    .from("data_program_bantuan")
    .select("*")
    .eq("id_data_program_bantuan", id)
    .single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.createBantuan = async (req, res) => {
  const newData = req.body;
  const { data, error } = await req.supabase
    .from("data_program_bantuan")
    .insert([newData])
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.updateBantuan = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const { data, error } = await req.supabase
    .from("data_program_bantuan")
    .update(updatedData)
    .eq("id_data_program_bantuan", id)
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.removeBantuan = async (req, res) => {
  const { id } = req.params;
  const { error } = await req.supabase
    .from("data_program_bantuan")
    .delete()
    .eq("id_data_program_bantuan", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Deleted successfully" });
};

// Bangunan
exports.getBangunanByTahun = async (req, res) => {
  const { tahun, kode_sls } = req.query;

  if (!tahun) {
    return res.status(400).json({ error: "Parameter tahun wajib diisi" });
  }

  let query = req.supabase
    .from("data_kepemilikan_bangunan")
    .select("*")
    .eq("tahun", tahun);

  if (kode_sls) {
    query = query.eq("sls", kode_sls);
  }

  const { data, error } = await query;
  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
};

exports.getAllBangunan = async (req, res) => {
  const { data, error } = await req.supabase
    .from("data_kepemilikan_bangunan")
    .select("*, sls(*)");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.getByIdBangunan = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await req.supabase
    .from("data_kepemilikan_bangunan")
    .select("*")
    .eq("id_kepemilikan_bangunan", id)
    .single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.createBangunan = async (req, res) => {
  const newData = req.body;
  const { data, error } = await req.supabase
    .from("data_kepemilikan_bangunan")
    .insert([newData])
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.updateBangunan = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const { data, error } = await req.supabase
    .from("data_kepemilikan_bangunan")
    .update(updatedData)
    .eq("id_kepemilikan_bangunan", id)
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.removeBangunan = async (req, res) => {
  const { id } = req.params;
  const { error } = await req.supabase
    .from("data_kepemilikan_bangunan")
    .delete()
    .eq("id_kepemilikan_bangunan", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Deleted successfully" });
};

// Ternak

exports.getTernakByTahun = async (req, res) => {
  const { tahun, kode_sls } = req.query;

  if (!tahun) {
    return res.status(400).json({ error: "Parameter tahun wajib diisi" });
  }

  let query = req.supabase
    .from("data_kepemilikan_ternak")
    .select("*")
    .eq("tahun", tahun);

  if (kode_sls) {
    query = query.eq("sls", kode_sls);
  }

  const { data, error } = await query;
  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
};

exports.getAllTernak = async (req, res) => {
  const { data, error } = await req.supabase
    .from("data_kepemilikan_ternak")
    .select("*, sls(*)");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.getByIdTernak = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await req.supabase
    .from("data_kepemilikan_ternak")
    .select("*")
    .eq("id_kepemilikan_ternak", id)
    .single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.createTernak = async (req, res) => {
  const newData = req.body;
  const { data, error } = await req.supabase
    .from("data_kepemilikan_ternak")
    .insert([newData])
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.updateTernak = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const { data, error } = await req.supabase
    .from("data_kepemilikan_ternak")
    .update(updatedData)
    .eq("id_kepemilikan_ternak", id)
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.removeTernak = async (req, res) => {
  const { id } = req.params;
  const { error } = await req.supabase
    .from("data_kepemilikan_ternak")
    .delete()
    .eq("id_kepemilikan_ternak", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Deleted successfully" });
};
