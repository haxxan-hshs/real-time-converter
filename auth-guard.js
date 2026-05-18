// Protects private pages and exposes small auth helpers for the UI.
(function () {
  const AUTH_PAGE = 'auth.html';
  const PUBLIC_PAGES = [AUTH_PAGE];
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const isPublicPage = PUBLIC_PAGES.includes(currentPage);

  function getReturnPath() {
    const params = new URLSearchParams(window.location.search);
    return params.get('redirect') || 'index.html';
  }

  async function requireSession() {
    const { data, error } = await window._sb.auth.getSession();
    if (error || !data.session) {
      window.location.replace(`${AUTH_PAGE}?redirect=${encodeURIComponent(currentPage)}`);
      return null;
    }
    return data.session;
  }

  async function updateHeader(session) {
    const userLabel = document.getElementById('authUserLabel');
    const logoutBtn = document.getElementById('logoutBtn');
    if (!userLabel || !logoutBtn) return;

    const user = session?.user;
    const name =
      user?.user_metadata?.full_name ||
      user?.user_metadata?.name ||
      user?.email ||
      'Signed in';

    userLabel.textContent = name;
    logoutBtn.hidden = !user;
    logoutBtn.onclick = async () => {
      logoutBtn.disabled = true;
      await window._sb.auth.signOut();
      window.location.replace(AUTH_PAGE);
    };
  }

  async function boot() {
    if (!window._sb) return;

    if (isPublicPage) {
      const { data } = await window._sb.auth.getSession();
      if (data.session && !window.location.hash.includes('type=recovery')) {
        window.location.replace(getReturnPath());
      }
      return;
    }

    const session = await requireSession();
    if (!session) return;
    document.body.classList.remove('auth-pending');
    await updateHeader(session);

    window._sb.auth.onAuthStateChange((_event, nextSession) => {
      if (!nextSession) {
        window.location.replace(AUTH_PAGE);
        return;
      }
      document.body.classList.remove('auth-pending');
      updateHeader(nextSession);
    });
  }

  window.appAuth = { requireSession, updateHeader };
  boot();
})();
