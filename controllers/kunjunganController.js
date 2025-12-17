const supabase = require("../supabaseClient");

const UAParser = require('ua-parser-js');
const parser = new UAParser();

exports.catatKunjungan = async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const { url } = req.body;

  const parsedUA = parser.setUA(userAgent).getResult();
  let deviceType = 'desktop';

  if (parsedUA.device.type === 'mobile') deviceType = 'mobile';
  else if (parsedUA.device.type === 'tablet') deviceType = 'tablet';

  const { error } = await supabase.from('statistik_pengunjung').insert({
    ip_address: ip === '::1' ? '127.0.0.1' : ip,
    pengunjung: userAgent,
    url,
    device: deviceType,
  });

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ message: 'Kunjungan dicatat' });
};

exports.getDeviceStatistik = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('statistik_pengunjung')
      .select('device')
      .eq('url', '/'); // ✅ filter hanya untuk halaman /

    if (error) throw error;

    // Manual rekap jumlah per device
    const deviceCounts = { mobile: 0, tablet: 0, desktop: 0 };
    data.forEach(row => {
      const key = row.device?.toLowerCase();
      if (deviceCounts[key] !== undefined) {
        deviceCounts[key]++;
      }
    });

    res.status(200).json(deviceCounts);
  } catch (err) {
    console.error('[getDeviceStatistik] Error:', err.message);
    res.status(500).json({ error: err.message });
  }
};



// Ambil statistik
exports.getStatistik = async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const { url } = req.query; // ambil dari query param

  try {
    const filter = url ? { url } : {};

    const total = await supabase
      .from('statistik_pengunjung')
      .select('*', { count: 'exact', head: true })
      .match(filter);

    const hariIni = await supabase
      .from('statistik_pengunjung')
      .select('*', { count: 'exact', head: true })
      .match(filter)
      .gte('created_at', `${today}T00:00:00`)
      .lte('created_at', `${today}T23:59:59`);

    const mingguIni = await supabase.rpc('statistik_mingguan', { q_url: url || null });
    const tahunIni = await supabase.rpc('statistik_tahunan', { q_url: url || null });

    res.status(200).json({
      total: total.count || 0,
      hariIni: hariIni.count || 0,
      mingguIni: mingguIni?.data || 0,
      tahunIni: tahunIni?.data || 0,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
