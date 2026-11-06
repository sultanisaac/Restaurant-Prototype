export type Route = 'home' | 'menu' | 'faq' | 'contact' | 'admin';

export function getRouteFromPath(): Route {
  // Gracefully upgrade any legacy hash URLs to clean path URLs
  const hash = window.location.hash.toLowerCase();
  if (hash.startsWith('#/admin') || hash === '#admin') {
    window.history.replaceState(null, '', '/admin');
    return 'admin';
  }
  if (hash.startsWith('#/menu') || hash === '#menu') {
    window.history.replaceState(null, '', '/menu');
    return 'menu';
  }
  if (hash.startsWith('#/faq') || hash === '#faq') {
    window.history.replaceState(null, '', '/faq');
    return 'faq';
  }
  if (hash.startsWith('#/contact') || hash === '#contact') {
    window.history.replaceState(null, '', '/contact');
    return 'contact';
  }

  // Handle pathname
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  if (path === '/admin' || path.endsWith('/admin')) return 'admin';
  if (path === '/menu' || path.endsWith('/menu')) return 'menu';
  if (path === '/faq' || path.endsWith('/faq')) return 'faq';
  if (path === '/contact' || path.endsWith('/contact')) return 'contact';
  return 'home';
}

export function navigateTo(path: string, sectionId?: string) {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new Event('app-route-change'));

  if (sectionId) {
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

