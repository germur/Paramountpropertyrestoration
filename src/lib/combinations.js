// src/lib/combinations.js
import { buildServicePath } from './paths.js';
import { restorationGroups, cities } from '../data/restoration.js'; 
// Si remodelación está separada, impórtala y concaténala a "groups"

function inferVertical(group) {
  // Si en tus datos tienes "vertical", úsalo; si no, infiérelo por template o slug.
  if (group.vertical) return group.vertical;
  if (group.template === 'remodeling' || group.slug?.includes('remodel')) return 'remodeling';
  return 'restoration';
}

export function getAllCombinations({ groups = restorationGroups, cityList = cities } = {}) {
  const out = [];

  for (const group of groups) {
    const vertical = inferVertical(group);
    const servicesArray = group.services ?? group.subservices ?? []; // compat con tu estructura actual

    for (const service of servicesArray) {
      const leaves = service.subservices?.length ? service.subservices : [service];
      for (const leaf of leaves) {
        for (const city of cityList) {
          out.push({
            vertical,
            group,
            service,
            subservice: service.subservices?.length ? leaf : null,
            city,
            path: buildServicePath({
              vertical,
              group: group.slug,
              service,
              subservice: service.subservices?.length ? leaf : null,
              city
            })
          });
        }
      }
    }
  }

  return out;
}