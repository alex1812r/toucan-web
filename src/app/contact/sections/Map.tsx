'use client'
import { useCallback, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import { Autocomplete, Button, Container, Grid, TextField } from '@mui/material';
import { useDebounce } from '@/hook/useDebounce';


const markerIcon = new Icon({
  iconUrl: '/marker.png',
  iconSize: [38, 38]
})

const ChangeCenter = ({
  latLon,
}: {  latLon: LatLngExpression }) => {
  const map = useMap();
  map.setView(latLon)
  return null;
}

const Map = () => {
  const [coords, setCoords] = useState<LatLngExpression>([10.4839372, -66.913227]);
  const [markerCoords, setMarkerCoords] = useState<LatLngExpression>([10.484700, -66.912373])
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);

  const searchResults = useCallback(() => {
    setSearching(true);
    const url = `https://nominatim.openstreetmap.org/search?format=json&polygon=1&addressdetails=1&q=${query}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setResults(data);
      });
      setSearching(false);
  }, [query])

  useDebounce(() => {
    if(query) {
      searchResults()
    }
  }, [query], 700)

  return (
    <section>
      <Container>
        <MapContainer 
          center={[10.4839372, -66.913227]} zoom={15} scrollWheelZoom
          style={{ height: 400 }}>
          <ChangeCenter latLon={coords} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={markerCoords} icon={markerIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
            <Autocomplete
              sx={{ my: 2 }}
              freeSolo
              disablePortal
              options={results}
              getOptionLabel={(op) => op.display_name}
              onInputChange={(e, value) => {
                setQuery(value);
              }}
              onChange={(e, val) => {
                if(val) {
                  console.log('val', val)
                  setCoords([
                    +val.lat,
                    +val.lon
                  ])
                  setMarkerCoords([
                    +val.lat,
                    +val.lon
                  ])
                }
              }}
              renderInput={(params) => <TextField {...params} placeholder='type place you want you search' />}
            />

        
      </Container>
    </section>
  )
}
export default Map