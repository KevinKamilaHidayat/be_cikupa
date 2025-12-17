const supabase = require("../supabaseClient");

exports.getAll = async (req, res) => {
  const { data, error } = await req.supabase.from("bumdes").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await req.supabase
    .from("bumdes")
    .select("*")
    .eq("id_bumdes", id)
    .single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const { data, error } = await req.supabase
    .from("bumdes")
    .update(updatedData)
    .eq("id_bumdes", id)
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  const { error } = await req.supabase
    .from("bumdes")
    .delete()
    .eq("id_bumdes", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Deleted successfully" });
};

exports.tambahbumdes = async (req, res) => {
  const {
    nama_usaha,
    deskripsi,
    kontak,
    foto_usaha,
  } = req.body;

  try {
    

    const { data, error } = await supabase.from("bumdes").insert([
      {
        nama_usaha,
        deskripsi,
        kontak,
        foto_usaha,
      },
    ]);

    if (error) throw error;

    res.status(201).json({ message: "bumdes berhasil ditambahkan", data });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan bumdes",
      error: error.message,
    });
  }
};