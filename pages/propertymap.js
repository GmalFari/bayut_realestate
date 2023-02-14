import * as React from 'react';
import Head from 'next/head';
import MyMap from '../components/Mymap';
export default function map() {

  return (
    <div style={{width:'100vw',height:'100vh'}}>
        
    <MyMap />
    
    </div>
  );
}
