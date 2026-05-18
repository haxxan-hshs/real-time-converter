// ============================================================
// Supabase Configuration - auto-initialized via CDN
// ============================================================

const SUPABASE_URL =
  window.SUPABASE_URL ||
  'https://dnevnwmlddgwwvnvkwqb.supabase.co';

const SUPABASE_ANON_KEY =
  window.SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuZXZud21sZGRnd3d2bnZrd3FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyNTU3NjAsImV4cCI6MjA5MzgzMTc2MH0.D0J2D79aVrBGw0pQgILVMkuT1iFVdIpXhWL7xOM2Tao';

if (!window.supabase) {
  throw new Error('Supabase CDN script must be loaded before supabase-config.js');
}

window._sb = window._sb || window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    detectSessionInUrl: true,
    persistSession: true,
    storage: window.localStorage,
  },
});
