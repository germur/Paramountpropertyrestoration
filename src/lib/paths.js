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
  const unit = subservice?.slug ?? service?.slug;

  if (!unified) {
    // ====== MODO LEGACY (tus rutas actuales) ======
    if (vertical === 'restoration') {
      // /restoration/{group}/{unit}/{city}
      return `/restoration/${group}/${unit}/${citySlug}`;
    }
    // remodeling actual: /services/{unit}/{city}
    // (si en el futuro añades group, quedaría /services/{group}/{unit}/{city})
    return group
      ? `/services/${group}/${unit}/${citySlug}`
      : `/services/${unit}/${citySlug}`;
  }

  // ====== MODO UNIFICADO (para cuando migres) ======
  const base = `/services/${vertical}`;
  const mid = group ? `/${group}` : '';
  return `${base}${mid}/${unit}/${citySlug}`;
}