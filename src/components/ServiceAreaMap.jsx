import { useEffect, useRef } from 'react';

export default function ServiceAreaMap({ city, county, serviceCities = [] }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Only load if we're in the browser
    if (typeof window === 'undefined') return;

    // Load Leaflet dynamically
    const loadMap = async () => {
      if (mapInstanceRef.current) return;

      // Load Leaflet CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);

      // Load Leaflet JS
      const L = await import('https://unpkg.com/leaflet@1.9.4/dist/leaflet-src.esm.js');

      if (!mapRef.current) return;

      // Florida bounds
      const floridaBounds = [[24.396308, -87.634938], [31.000968, -79.974306]];

      // City coordinates (rough approximations for major Florida cities)
      const cityCoords = {
        'miami': [25.7617, -80.1918],
        'orlando': [28.5383, -81.3792],
        'tampa': [27.9506, -82.4572],
        'jacksonville': [30.3322, -81.6557],
        'fort-lauderdale': [26.1224, -80.1373],
        'hialeah': [25.8576, -80.2781],
        'tallahassee': [30.4518, -84.27277],
        'hollywood': [26.0112, -80.1495],
        'coral-gables': [25.7217, -80.2841],
        'miramar': [25.9723, -80.2329],
        'gainesville': [29.6516, -82.3248],
        'pembroke-pines': [26.0073, -80.2962],
        'cape-coral': [26.5629, -81.9495],
        'clearwater': [27.9659, -82.8001],
        'brandon': [27.9378, -82.2859],
        'lakeland': [28.0395, -81.9498],
        'palm-bay': [28.0345, -80.5887],
        'west-palm-beach': [26.7153, -80.0534],
        'pompano-beach': [26.2379, -80.1248],
        'spring-hill': [28.4769, -82.5307],
        'davie': [26.0764, -80.2333],
        'fort-myers': [26.6406, -81.8723],
        'boca-raton': [26.3683, -80.1289],
        'deltona': [28.9005, -81.2639],
        'palm-coast': [29.5845, -81.2078]
      };

      // Get center coordinates for the city
      const centerCoords = cityCoords[city.toLowerCase()] || cityCoords['miami'];

      // Initialize map
      mapInstanceRef.current = L.map(mapRef.current, {
        center: centerCoords,
        zoom: 10,
        maxBounds: floridaBounds,
        maxBoundsViscosity: 1.0
      });

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapInstanceRef.current);

      // Custom icon for service areas
      const serviceIcon = L.divIcon({
        html: '<div style="background-color: #35c3e9; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">🏠</div>',
        className: 'custom-service-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      // Add marker for main city
      L.marker(centerCoords, { icon: serviceIcon })
        .addTo(mapInstanceRef.current)
        .bindPopup(`
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: 600;">${city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">24/7 Emergency Service Available</p>
            <div style="margin: 8px 0;">
              <a href="tel:7866022217" style="display: inline-flex; align-items: center; gap: 6px; background: #35c3e9; color: white; text-decoration: none; padding: 6px 12px; border-radius: 4px; font-weight: 600; font-size: 13px;">
                📞 Call Now
              </a>
            </div>
          </div>
        `)
        .openPopup();

      // Add markers for nearby service cities
      serviceCities.slice(0, 8).forEach(serviceCity => {
        const coords = cityCoords[serviceCity.slug?.toLowerCase()] || cityCoords[serviceCity.name?.toLowerCase()?.replace(/\s+/g, '-')];
        if (coords && coords !== centerCoords) {
          const smallIcon = L.divIcon({
            html: '<div style="background-color: #F59E0B; color: white; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; font-size: 8px; font-weight: bold; border: 1px solid white; box-shadow: 0 1px 2px rgba(0,0,0,0.2);">🏢</div>',
            className: 'custom-service-icon-small',
            iconSize: [16, 16],
            iconAnchor: [8, 8]
          });

          L.marker(coords, { icon: smallIcon })
            .addTo(mapInstanceRef.current)
            .bindPopup(`
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                <h4 style="margin: 0 0 4px 0; color: #1f2937; font-size: 14px; font-weight: 600;">${serviceCity.nombre || serviceCity.name}</h4>
                <p style="margin: 0; color: #6b7280; font-size: 12px;">Service Available</p>
              </div>
            `);
        }
      });

      // Add service radius circle
      L.circle(centerCoords, {
        color: '#35c3e9',
        fillColor: '#35c3e9',
        fillOpacity: 0.1,
        radius: 20000, // 20km radius
        weight: 2
      }).addTo(mapInstanceRef.current).bindPopup(`
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <h4 style="margin: 0 0 4px 0; color: #1f2937; font-size: 14px; font-weight: 600;">Primary Service Area</h4>
          <p style="margin: 0; color: #6b7280; font-size: 12px;">Rapid response within 60 minutes</p>
        </div>
      `);
    };

    loadMap();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [city, county, serviceCities]);

  return (
    <div className="service-area-map">
      <div
        ref={mapRef}
        style={{
          height: '400px',
          width: '100%',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
        }}
      />
      <div className="map-legend" style={{
        marginTop: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        fontSize: '0.875rem',
        color: '#6b7280',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ 
            width: '16px', 
            height: '16px', 
            backgroundColor: '#35c3e9', 
            borderRadius: '50%',
            border: '2px solid white',
            boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
          }}></div>
          <span>Primary Location</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ 
            width: '12px', 
            height: '12px', 
            backgroundColor: '#F59E0B', 
            borderRadius: '50%',
            border: '1px solid white',
            boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
          }}></div>
          <span>Service Areas</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ 
            width: '16px', 
            height: '3px', 
            backgroundColor: '#35c3e9', 
            opacity: 0.3,
            borderRadius: '2px'
          }}></div>
          <span>60min Response Zone</span>
        </div>
      </div>
    </div>
  );
}