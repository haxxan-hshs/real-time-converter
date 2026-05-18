// ============================================================
// Supabase Configuration - auto-initialized via CDN
// ============================================================

const SUPABASE_URL =
  window.SUPABASE_URL ||
  'https://mknkqrtxdosxqmaticbg.supabase.co';

const SUPABASE_ANON_KEY =
  window.SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rbmtxcnR4ZG9zeHFtYXRpY2JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTc5MDUsImV4cCI6MjA5NDY3MzkwNX0.iAKGfFFcuNyDfxyq2oi4GwDzFMMgJCwKUSEnNcaOSsU';

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
