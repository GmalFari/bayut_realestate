import * as React from 'react';
import Head from 'next/head';
import Map, {Marker} from 'react-map-gl';
import { GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect } from "react";
const MAPBOX_TOKEN = "pk.eyJ1IjoiamFtYWxkb2UiLCJhIjoiY2xlMDBycDFqMTc0ZDNucGhpdmZ0a3MxMyJ9._kaDvAK72eaDHxAyfsuJbA"; // Set your mapbox token here

export default function MyMap() {
  const [viewport,setViewport] = useState({longitude:-100,latitude:40});
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((pos)=>{
      setViewport({
        ...viewport,
        latitude:pos.coords.latitude,
        longitude:pos.coords.longitude,
        zoom:3.5
      })
    })
  },[])
  console.log(viewport)
  return (
    <div style={{width:'100vw',height:'100vh'}}>
      {/* {viewport.latitude && viewport.longitude && ( */}
      <div style={{width:'100vw',height:'100vh'}}>
      <Map
      style={{width:'100vw',height:'100vh'}}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
      <Marker
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
             <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </Map>
      </div>
    {/* )} */}
        

    
    </div>
  );
}
