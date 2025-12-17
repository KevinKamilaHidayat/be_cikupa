exports.getAll = async (req, res) => {
  const { data, error } = await req.supabase
    .from("apbdes")
    .select("*");

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.getById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await req.supabase
    .from("apbdes")
    .select("*")
    .eq("id_apbdes", id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.create = async (req, res) => {
  const newData = req.body;

  const { data, error } = await req.supabase
    .from("apbdes")
    .insert([newData])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const { data, error } = await req.supabase
    .from("apbdes")
    .update(updatedData)
    .eq("id_apbdes", id)
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

exports.remove = async (req, res) => {
  const { id } = req.params;

  const { error } = await req.supabase
    .from("apbdes")
    .delete()
    .eq("id_apbdes", id);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Deleted successfully" });
};
