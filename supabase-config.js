// ============================================================
//  Supabase Configuration — auto-initialized via CDN
// ============================================================

const SUPABASE_URL     = 'https://dnevnwmlddgwwvnvkwqb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuZXZud21sZGRnd3d2bnZrd3FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyNTU3NjAsImV4cCI6MjA5MzgzMTc2MH0.D0J2D79aVrBGw0pQgILVMkuT1iFVdIpXhWL7xOM2Tao';

// Create a single shared client used by all pages
const _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window._sb = _sb;
