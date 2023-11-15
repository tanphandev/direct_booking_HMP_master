'use client';
import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import config from '@/configs/env/env';

type PositionProps = {
  lat: any;
  lng: any;
};

type Props = {
  mapClassName?: string;
  position: PositionProps;
  marker?: PositionProps;
  markerLabel?: string;
};

function Map({ mapClassName, position, marker, markerLabel }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: config.GOOGLE_API_KEY,
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');

      const { Marker } = (await loader.importLibrary('marker')) as google.maps.MarkerLibrary;

      // map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: 'MY_NEXTJS_MAPID',
      };

      //setup the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // put up a marker
      new Marker({
        map: map,
        position: marker,
        label: {
          text: markerLabel ?? '',
          color: '#33a653',
          fontSize: '20px',
          fontWeight: 'bold',
        },
      });
    };

    initMap();
  }, []);
  return <div className={mapClassName} ref={mapRef} />;
}
export default Map;
