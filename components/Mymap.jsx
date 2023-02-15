import * as React from 'react';
import Head from 'next/head';
import Map, {Marker} from 'react-map-gl';
import { GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect,useContext } from "react";
const MAPBOX_TOKEN = "pk.eyJ1IjoiamFtYWxkb2UiLCJhIjoiY2xlMDAwZWlhMTM5OTN3b2F0YnVscHFoYSJ9.N_J3cEVw10zYYVBGf3dMmg"; // Set your mapbox token here
import "mapbox-gl/dist/mapbox-gl.css";

const MyMap = ({geoDetail}) =>{
    const {lat,lng} = {...geoDetail}
  const [viewport,setViewport] = useState({latitude:lat,longitude:lng});
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((pos)=>{
      setViewport({
        ...viewport,
        latitude:viewport.latitude,
        longitude:viewport.longitude,
        zoom:7
      })
    })
  },[])
  return (
    <div style={{width:'400px',height:"400px"}}>
      {/* {viewport.latitude && viewport.longitude && ( */}
      <div style={{width:'100vw',height:'100vh'}}>
      <Map
      style={{width:'100vw',height:'100vh'}}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{...viewport,zoom:14}}
        getCurrentPosition={true}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        // zoom={4}
        boxZoom={true}
        center={[lng,lng]}
        
        >
      <Marker
    
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
            <GeolocateControl
            positionOptions={viewport}
        />
      </Map>
      </div>
    {/* )} */}
        

    
    </div>
  );
}

export default MyMap;