import { useState } from 'react'
import './App.css'
import mobile_bg from './assets/pattern-bg-mobile.png'
import desktop_bg from './assets/pattern-bg-desktop.png'
import icon_arrow from './assets/icon-arrow.svg'


import LeafletMapComponent from "./LeafletMap";

function App() {

  return (
    <div className="App flex flex-col max-w-[375px] ">

        <div className="absolute h-screen overflow-hidden -z-20">
            <img src={mobile_bg}/>
            <LeafletMapComponent />
        </div>

        <div className="flex flex-col text-center mx-6 ">
            <h1 className="text-white text-2xl mt-8 mb-4">
                IP Address Tracker
            </h1>
            <div className="flex flex-row">
                <input className="p-4 w-full rounded-l-2xl w-4/5 outline-0" placeholder="Search for any IP address or domain" type="text"/>
                <div className="bg-MyVeryDarkGray w-1/5 rounded-r-2xl">
                    <img src={icon_arrow} className="m-auto h-4 w-3 mt-5"/>
                </div>
            </div>
            <div className="flex flex-col text-center bg-white rounded-2xl mt-6 py-6">
                <div className="flex flex-col">
                    <span className="text-xs font-medium text-MyDarkGray">IP ADDRESS</span>
                    <span className="text-xl font-medium mt-1">192.212.174.101</span>
                </div>
                <div className="flex flex-col mt-4">
                    <span className="text-xs font-medium text-MyDarkGray">LOCATION</span>
                    <span className="text-xl font-medium mt-1">Brooklyn, NY 10001</span>
                </div>
                <div className="flex flex-col mt-4">
                    <span className="text-xs font-medium text-MyDarkGray">TIMEZONE</span>
                    <span className="text-xl font-medium mt-1">UTC -05:00</span>
                </div>
                <div className="flex flex-col mt-4">
                    <span className="text-xs font-medium text-MyDarkGray">ISP</span>
                    <span className="text-xl font-medium mt-1">SpaceX Starlink</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
