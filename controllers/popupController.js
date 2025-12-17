const supabase = require("../supabaseClient");

exports.getAll = async (req, res) => {
  const { data, error } = await req.supabase.from("popup").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await req.supabase
    .from("popup")
    .select("*")
    .eq("id_popup", id)
    .single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.create = async (req, res) => {
  const newData = req.body;
  const { data, error } = await req.supabase
    .from("popup")
    .insert([newData])
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const { data, error } = await req.supabase
    .from("popup")
    .update(updatedData)
    .eq("id_popup", id)
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  const { error } = await req.supabase
    .from("popup")
    .delete()
    .eq("id_popup", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Deleted successfully" });
};

exports.tambahpopup = async function (req, res) {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL tidak ditemukan" });
  }

  const { data, error } = await supabase.from("popup").insert([
    {
      gambar_popup: url,
    },
  ]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: "Gambar dan caption berhasil disimpan", data });
};
