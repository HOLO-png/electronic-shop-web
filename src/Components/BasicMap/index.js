import React, { useCallback, useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Button } from 'antd';

const markerIcon = new L.Icon({
    iconUrl: require('../../assets/images/icon2.png').default,
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
});

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: '', lng: '' },
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            error,
        });
    };

    useEffect(() => {
        if (!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: 'Không tìm thấy!',
            });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return location;
};

function BasicMap() {
    const [center, setCenter] = useState({
        lat: 16.054407,
        lng: 108.202164,
    });
    const location = useGeoLocation();
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();
    const position = [center.lat, center.lng];

    const showMyLocation = () => {
        if (location && !location.error) {
            mapRef.current.leafletElement.flyTo(
                [location.coordinates.lat, location.coordinates.lng],
                ZOOM_LEVEL,
                { animate: true },
            );
        } else {
            alert(location.error);
            console.log(location.error.message);
        }
    };

    return (
        <>
            <Map
                center={position}
                zoom={ZOOM_LEVEL}
                style={{ height: '250px' }}
                ref={mapRef}
            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {location.loaded && !location.error && (
                    <Marker
                        position={[
                            location.coordinates.lat,
                            location.coordinates.lng,
                        ]}
                        icon={markerIcon}
                    >
                        <Popup>
                            <p>You is here</p>
                        </Popup>
                    </Marker>
                )}
            </Map>
            <Button type="primary" onClick={showMyLocation}>
                Locate
            </Button>
        </>
    );
}

BasicMap.propTypes = {};
export default BasicMap;
