import React, { useCallback, useRef, useState } from 'react';
import {
    GoogleMap,
    useJsApiLoader,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';
import PropTypes from 'prop-types';
import { formatRelative } from 'date-fns';
import '@reach/combobox/styles.css';
// import Search from './Search';

const libraries = ['places'];
function BasicMap({ coordinates }) {
    const [marker, setMarker] = useState([]);
    const mapRef = useRef();
    const [selected, setSelected] = useState(null);
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries: libraries,
    });

    if (loadError) return 'Eroor loading maps';

    if (!isLoaded) return 'loading maps';

    const containerStyle = { width: '100%', height: '200px' };

    const center = { lat: 16.054407, lng: 108.202164 };

    // const { isLoaded } = useJsApiLoader({
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    // });

    const options = {
        disableDefaultUI: true,
        zoomControl: true,
    };

    return (
        <div className="map">
            {/* <Search /> */}
            <GoogleMap
                mapContainerStyle={containerStyle}
                zoom={15}
                center={center}
                options={options}
                onClick={(e) => {
                    setMarker(() => [
                        {
                            lat: e.latLng.lat(),
                            lng: e.latLng.lng(),
                            time: new Date(),
                        },
                    ]);
                }}
                onLoad={onMapLoad}
            >
                {marker.map((marker) => (
                    <Marker
                        key={marker.time.toISOString()}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        onClick={() => {
                            setSelected(marker);
                        }}
                    />
                ))}
                {selected ? (
                    <InfoWindow
                        position={{ lat: selected.lat, lng: selected.lng }}
                        onCloseClick={() => setSelected(null)}
                    >
                        <div>
                            <h6>My Address!</h6>
                            <p>
                                Spotted
                                {formatRelative(selected.time, new Date())}
                            </p>
                        </div>
                    </InfoWindow>
                ) : null}
            </GoogleMap>
        </div>
    );
}
BasicMap.propTypes = {};
export default BasicMap;
