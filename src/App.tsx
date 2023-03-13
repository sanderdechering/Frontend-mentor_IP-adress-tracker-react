import { useState } from 'react'
import './App.css'
import mobile_bg from './assets/pattern-bg-mobile.png'
import desktop_bg from './assets/pattern-bg-desktop.png'
function App() {

  return (
    <div className="App flex flex-col max-w-[375px]">

        <img src={mobile_bg} className="absolute -z-10"/>
        <div className="bg-red-400 absolute -z-20 h-screen w-screen">

        </div>
        <div className="flex flex-col text-center mx-6">
            <h1 className="text-white text-2xl mt-8 mb-4">
                IP Address Tracker
            </h1>
            <div>
                <input className="p-4 w-full rounded-2xl" placeholder="Search for any IP address or domain" type="text"/>
                <input className="" type="button"/>
            </div>
            <div className="flex flex-col text-center bg-white rounded-2xl mt-6">
                <div className="flex flex-col mt-4">
                    <span className="text-xs font-medium text-MyDarkGray">IP ADRESS</span>
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
