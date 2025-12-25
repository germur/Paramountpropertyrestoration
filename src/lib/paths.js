// src/lib/paths.js
// Genera rutas en 2 modos:
// - unified (por defecto): /services/{vertical}/{group?}/{unit}/{city}
// - legacy (opcional): coincide con tu routing anterior
//   • restoration: /restoration/{group}/{unit}/{city}
//   • remodeling:  /services/{unit}/{city}
export function buildServicePath({
  vertical,   // 'restoration' | 'remodeling'
  group,      // string (slug del group) o undefined
  service,    // objeto con { slug }
  subservice, // objeto con { slug } o null
  city,       // string o { slug }
  unified = true // <-- usa false para que coincida con tus rutas actuales
}) {
  const citySlug = typeof city === 'string' ? city : (city?.slug || '');
  const unit = subservice?.slug || service?.slug || '';

  if (!unified) {
    // ====== MODO LEGACY (tus rutas actuales) ======
    if (vertical === 'restoration') {
      // /restoration/{group}/{unit}/{city}
      // Filter empty segments to avoid '//' or 'null'
      const parts = ['restoration', group, unit, citySlug].filter(Boolean);
      return `/${parts.join('/')}`;
    }
    // remodeling: /services/{group?}/{unit}/{city}
    const parts = ['services'];
    if (group) parts.push(group);
    if (unit) parts.push(unit);
    if (citySlug) parts.push(citySlug);
    return `/${parts.join('/')}`;
  }

  // ====== MODO UNIFICADO (para cuando migres) ======
  // /services/{vertical}/{group?}/{unit}/{city}
  const parts = ['services', vertical];
  if (group) parts.push(group);
  if (unit) parts.push(unit);
  if (citySlug) parts.push(citySlug);
  return `/${parts.join('/')}`;
}