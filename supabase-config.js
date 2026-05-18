// ============================================================
// Supabase Configuration - auto-initialized via CDN
// ============================================================

const SUPABASE_URL =
  window.SUPABASE_URL ||
  'https://dnevnwmlddgwwvnvkwqb.supabase.co';

const SUPABASE_ANON_KEY =
  window.SUPABASE_ANON_KEY ||
  'sb_publishable_aAWVU5Dvy7HTvbAAxZI3uw_xVKbY2-w';

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
