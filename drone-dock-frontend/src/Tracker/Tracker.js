import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'
import ScrollToTop from '../components/ScrollToTop';


function Map() {
    return(
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat: 38.907192, lng: -77.036873}} 
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Discover() {
    return (
        <>
        <ScrollToTop />
        <div style={{width: '100vw', height: '100vh'}}>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`} 
            loadingElement={<div style={{height: "100%"}} />} 
            containerElement={<div style={{height: "100%"}} />} 
            mapElement={<div style={{height: "100%"}} />} 
            />
        </div>
        </>
    )
}

export default Discover
