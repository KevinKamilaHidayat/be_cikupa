exports.getAll = async (req, res) => {
  const { data, error } = await req.supabase
    .from("data_agama")
    .select("*, sls(*)"); 
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.getAgama = async (req, res) => {
  const { tahun, kode_sls } = req.query;

  if (!tahun) {
    return res.status(400).json({ error: "Parameter tahun wajib diisi" });
  }

  let query = req.supabase.from("data_agama").select("*").eq("tahun", tahun);
  if (kode_sls) {
    query = query.eq("sls", kode_sls);
  }

  const { data, error } = await query;
  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await req.supabase
    .from("data_agama")
    .select("*")
    .eq("id_data_agama", id)
    .single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.create = async (req, res) => {
  const newData = req.body;
  const { data, error } = await req.supabase
    .from("data_agama")
    .insert([newData])
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const { data, error } = await req.supabase
    .from("data_agama")
    .update(updatedData)
    .eq("id_data_agama", id)
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  const { error } = await req.supabase
    .from("data_agama")
    .delete()
    .eq("id_data_agama", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Deleted successfully" });
};
