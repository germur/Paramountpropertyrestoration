// /src/lib/routing.ts
// Builder único de rutas + helpers de canonical/hreflang


export type PathParts = {
  vertical?: string;   // ej: "restoration"
  service?: string;    // ej: "water-damage"
  subservice?: string; // ej: "flood-damage"
  city?: string;       // ej: "miami"
};

// Canonical registry of vertical > service > subservice
export const SERVICE_REGISTRY: Record<string, Record<string, string[]>> = {
  restoration: {
    // WATER
    "water-damage": [
      "flood-damage",
      "leak-detection",
      "basement-flooding",
      "ceiling-water-damage",
      "emergency-water-removal",
      "water-extraction",
    ],
    // FIRE
    "fire-damage": [
      "smoke-damage",
      "soot-cleanup",
      "fire-damage-repair",
      "emergency-fire-response",
      "smoke-odor-removal",
      "fire-restoration", // newly added subservice
    ],
    // STORM
    "storm-damage": [
      "hurricane-damage",
      "wind-damage",
      "storm-debris-removal",
      "emergency-storm-repair",
      "roof-damage", // newly added subservice
    ],
    // MOLD
    "mold-remediation": [
      "mold-inspection",
      "black-mold-removal",
      "mold-prevention",
      "mold-testing",
      "air-quality-testing", // newly added subservice
      "mold-cleanup",
    ],
    // MITIGATION
    "mitigation-services": [
      "water-mitigation",
      "fire-mitigation",
      "mold-mitigation",
      "storm-mitigation",
      "emergency-response", // newly added subservice
    ],
  },
};

// Backward-compatibility & editorial aliases to canonical slugs
// e.g. old chips/links may use "leak-repair" but canonical is "leak-detection".
export const SUBSERVICE_ALIASES: Record<string, string> = {
  "leak-repair": "leak-detection",
  // add more legacy synonyms here if needed
};

export function normalizeParts(parts: PathParts): Required<PathParts> {
  const vertical = slugify(parts.vertical || "restoration");
  const service = slugify(parts.service || "");
  let subservice = slugify(parts.subservice || "");
  const city = slugify(parts.city || "");

  if (SUBSERVICE_ALIASES[subservice]) subservice = SUBSERVICE_ALIASES[subservice];

  return { vertical, service, subservice, city };
}

export function isValidCombo(parts: PathParts): boolean {
  const { vertical, service, subservice } = normalizeParts(parts);
  const services = SERVICE_REGISTRY[vertical];
  if (!services) return false;
  const subs = services[service];
  if (!subs) return false;
  if (!subservice) return true; // allow hub path /vertical/service when subservice is empty
  return subs.includes(subservice);
}

// Utility to enumerate hub/detail paths for sitemap generation
export function listServicePaths({ includeHubs = true, includeDetails = true }: { includeHubs?: boolean; includeDetails?: boolean } = {}) {
  const out: string[] = [];
  for (const [vertical, services] of Object.entries(SERVICE_REGISTRY)) {
    for (const [service, subservices] of Object.entries(services)) {
      if (includeHubs) out.push(buildServicePath({ vertical, service }));
      if (includeDetails) {
        for (const subservice of subservices) {
          out.push(buildServicePath({ vertical, service, subservice }));
        }
      }
    }
  }
  return out;
}

function slugify(input?: string) {
  if (!input) return "";
  return input
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function buildServicePath({ vertical = "restoration", service, subservice, city }: PathParts) {
  const norm = normalizeParts({ vertical, service, subservice, city });
  const parts = [norm.vertical, norm.service, norm.subservice].filter(Boolean);
  // Política: city al final
  const base = `/${parts.join("/")}`;
  return norm.city ? `${base}/${norm.city}` : base;
}

export function withBaseUrl(path: string, siteUrl: string) {
  const cleanSite = siteUrl.replace(/\/$/, "");
  const cleanPath = path.replace(/\/$/, "");
  return `${cleanSite}${cleanPath || "/"}`;
}

export function getCanonical({
  siteUrl,
  isHub,
  parts,
}: {
  siteUrl: string;
  isHub: boolean; // true = hub (sin city) | false = detail (con city)
  parts: PathParts;
}) {
  const { city, ...rest } = parts;
  const path = isHub ? buildServicePath({ ...rest, city: undefined }) : buildServicePath(parts);
  return withBaseUrl(path, siteUrl);
}

export function getHrefLangs({
  siteUrl,
  locales = ["en"],
  currentLocale = "en",
  canonicalPath,
}: {
  siteUrl: string;
  locales?: string[];      // ej: ["en", "es"] si tienes i18n
  currentLocale?: string;  // ej: "en"
  canonicalPath: string;   // ej: "/restoration/water-damage/flood-damage/miami"
}) {
  const base = siteUrl.replace(/\/$/, "");
  const path = canonicalPath.replace(/\/$/, "");
  return locales.map((lc) => ({
    hreflang: lc,
    href: `${base}${lc === "en" ? "" : `/${lc}`}${path}`,
    isCurrent: lc === currentLocale,
  }));
}