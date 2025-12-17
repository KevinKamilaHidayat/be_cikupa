const supabase = require("../supabaseClient");

exports.getAll = async (req, res) => {
  try {
    const { data, error } = await supabase.from("wisata").select("*").order("id_wisata", { ascending: false });

    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    console.error("Gagal mengambil data wisata:", error.message);
    res.status(500).json({ error: "Gagal mengambil data wisata" });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await req.supabase
    .from("wisata")
    .select("*")
    .eq("id_wisata", id)
    .single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.create = async (req, res) => {
  const newData = req.body;
  const { data, error } = await req.supabase
    .from("wisata")
    .insert([newData])
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.update = async (req, res) => {
 const id = req.params.id;
  const { judul_wisata, isi_wisata, penulis_wisata, gambar_wisata } = req.body;

  try {
    const { data, error } = await supabase
      .from("wisata")
      .update({
        judul_wisata,
        isi_wisata,
        penulis_wisata,
        gambar_wisata,
      })
      .eq("id_wisata", id);

    if (error) {
      console.error("Gagal update wisata:", error.message);
      return res.status(500).json({ error: error.message });
    }

    res.json({ message: "wisata berhasil diperbarui", data });
  } catch (err) {
    console.error("Kesalahan server:", err.message);
    res.status(500).json({ error: "Kesalahan server saat update wisata" });
  }
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  const { error } = await req.supabase
    .from("wisata")
    .delete()
    .eq("id_wisata", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Deleted successfully" });
};

exports.tambahwisata = async (req, res) => {
  const { penulis_wisata, judul_wisata, isi_wisata,alamat_wisata, gambar_wisata } = req.body;

  const { error } = await supabase.from("wisata").insert([
    {
      penulis_wisata,
      judul_wisata,
      isi_wisata,
      alamat_wisata,
      gambar_wisata,
    },
  ]);

  if (error) {
    console.error(error);
    return res.status(500).json({ error: "Gagal menambahkan wisata" });
  }

  res.json({ message: "wisata berhasil ditambahkan" });
};