'use client'
import React, { useEffect, useRef } from 'react';

interface LeafletMapProps {
  lat: number;
  lng: number;
  zoom: number;
}

export const LeafletMap: React.FC<LeafletMapProps> = ({ lat, lng, zoom }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current && !mapInstanceRef.current) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
      script.onload = () => {
        const L = (window as any).L;
        
        const map = L.map(mapRef.current).setView([lat, lng], zoom);
        mapInstanceRef.current = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(map);

        const customIcon = L.divIcon({
          html: `<div class="bg-primary -z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                   <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                     <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                   </svg>
                 </div>`,
          className: '',
          iconSize: [40, 40],
          iconAnchor: [20, 40],
        });

        L.marker([lat, lng], { icon: customIcon })
          .addTo(map)
          .bindPopup('<b>Visit Us Here!</b><br>Our Office Location')
          .openPopup();
      };
      document.body.appendChild(script);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lng, zoom]);

  return <div ref={mapRef} className="w-full h-full rounded-lg shadow-xl" />;
};

