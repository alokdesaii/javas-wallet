// Javas Exchange — theme. Load in <head> (before paint) to avoid a light flash.
// ponytail: localStorage per-browser only; real pref belongs on the user record later.
(() => {
  const KEY = 'jvx-theme';
  const media = matchMedia('(prefers-color-scheme: dark)');

  const stored = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
  const store = v => {
    try { v === 'system' ? localStorage.removeItem(KEY) : localStorage.setItem(KEY, v); } catch {}
  };

  // 'system' is the absence of a stored choice, so a browser-level change keeps working
  const mode = () => stored() || 'system';
  const resolve = m => (m === 'system' ? (media.matches ? 'dark' : 'light') : m);
  const paint = () => document.documentElement.dataset.theme = resolve(mode());

  paint();

  // follow the OS only while the user hasn't picked a side
  media.addEventListener('change', () => { if (mode() === 'system') paint(); });

  const api = {
    get: mode,
    resolved: () => resolve(mode()),
    set(m) {
      store(m);
      paint();
      dispatchEvent(new CustomEvent('jvx:theme', { detail: { mode: mode(), resolved: resolve(mode()) } }));
    },
    toggle() { api.set(resolve(mode()) === 'dark' ? 'light' : 'dark'); },
  };
  window.JVXTheme = api;

  addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.theme-toggle').forEach(b => b.onclick = () => api.toggle());
  });
})();
