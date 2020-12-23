import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow  } from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';
require('dotenv').config({ path: __dirname + '/./../../../.env' });

const Map = () => {
    const API_KEY : any = process.env.GOOGLE_MAPS_API
    console.log(process.env)
    const [currentPosition, setCurrentPosition] = useState({});
    // const success = (position:any) => {
    //     const currentPosition = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    //     }
    //     setCurrentPosition(currentPosition);
    // };

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(success);
    // })

    // const onMarkerDragEnd = (e:any) => {
    //     const lat = e.latLng.lat();
    //     const lng = e.latLng.lng();
    //     setCurrentPosition({ lat, lng })
    // };

    const mapStyles = {
        height: "65vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 31.9038, lng: 35.2034
    }

    // const locations = [
    //     {
    //         name: "Location 1",
    //         location: {
    //             lat: 31.9038,
    //             lng: 35.2034
    //         },
    //     },
    //     {
    //         name: "Location 2",
    //         location: {
    //             lat: 31.9038,
    //             lng: 35.3034
    //         },
    //     },
    //     {
    //         name: "Location 3",
    //         location: {
    //             lat: 31.9038,
    //             lng: 35.22
    //         },
    //     }
    // ]

    return (
        <LoadScript
            googleMapsApiKey="">
            <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={ defaultCenter}>
                {/* <Marker position ={currentPosition}/> */}
                {/* {
                    locations.map(item => {
                        return (
                            <Marker key={item.name} position={item.location} onClick={() => onSelect(item)} />
                        )
                    })
                }  */}
                {/* {
                    currentPosition.lat ?
                        <Marker
                            position={currentPosition}
                            onDragEnd={(e) => onMarkerDragEnd(e)}
                            draggable={true} /> :
                        null
                } */}
                
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;