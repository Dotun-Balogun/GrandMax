"use client";
import { useEffect, useRef } from "react";

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string}`;
    script.async = true;
    script.onload = () => {
      if (mapRef.current) {
        new google.maps.Map(mapRef.current, {
          center: { lat: 6.5244, lng: 3.3792 },
          zoom: 12,
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
}
