const supabase = require("../supabaseClient");

exports.getAll = async (req, res) => {
  const { data, error } = await req.supabase.from("koperasi").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await req.supabase
    .from("koperasi")
    .select("*")
    .eq("id_koperasi", id)
    .single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const { data, error } = await req.supabase
    .from("koperasi")
    .update(updatedData)
    .eq("id_koperasi", id)
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  const { error } = await req.supabase
    .from("koperasi")
    .delete()
    .eq("id_koperasi", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Deleted successfully" });
};

exports.tambahkoperasi = async (req, res) => {
  const {
    nama_koperasi,
    jenis_layanan,
    jam_operasional,
    kontak,
    alamat,
    gambar_koperasi,
  } = req.body;

  try {
    

    const { data, error } = await supabase.from("koperasi").insert([
      {
        nama_koperasi,
        jenis_layanan,
        jam_operasional,
        alamat,
        kontak,
        gambar_koperasi,
      },
    ]);

    if (error) throw error;

    res.status(201).json({ message: "koperasi berhasil ditambahkan", data });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan koperasi",
      error: error.message,
    });
  }
};