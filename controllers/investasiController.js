const supabase = require("../supabaseClient");

exports.getAll = async (req, res) => {
  const { data, error } = await req.supabase.from("investasi").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await req.supabase
    .from("investasi")
    .select("*")
    .eq("id_investasi", id)
    .single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const { data, error } = await req.supabase
    .from("investasi")
    .update(updatedData)
    .eq("id_investasi", id)
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  const { error } = await req.supabase
    .from("investasi")
    .delete()
    .eq("id_investasi", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Deleted successfully" });
};

exports.tambahinvestasi = async (req, res) => {
  const {
    jenis,
    luas,
    kontak,
    foto_investasi,
  } = req.body;

  try {
    

    const { data, error } = await supabase.from("investasi").insert([
      {
        jenis,
        luas,
        kontak,
        foto_investasi,
      },
    ]);

    if (error) throw error;

    res.status(201).json({ message: "investasi berhasil ditambahkan", data });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan investasi",
      error: error.message,
    });
  }
};