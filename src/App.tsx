import { useState } from 'react'
import './App.css'
import mobile_bg from './assets/pattern-bg-mobile.png'
import desktop_bg from './assets/pattern-bg-desktop.png'
import icon_arrow from './assets/icon-arrow.svg'


import LeafletMapComponent from "./LeafletMap";

function App() {

  return (
    <div className="App flex flex-col max-w-[375px] xs:max-w-[1440px] ">

        <div className="absolute h-screen overflow-hidden -z-10">
            <img src={mobile_bg} className="block xs:hidden"/>
            <img src={desktop_bg} className="xs:block hidden min-h-1/3"/>
            <LeafletMapComponent />
        </div>

        <div className="flex flex-col text-center mx-6 justify-center">

            <h1 className="text-white text-2xl md:text-3xl mt-8 mb-4">
                IP Address Tracker
            </h1>

            <div className="flex flex-row w-full sm:w-[600px] mx-auto">
                <input className="p-4 w-full rounded-l-2xl  outline-0" placeholder="Fill in IP address or domain..." type="text"/>
                <div className="bg-black w-[70px] rounded-r-2xl">
                    <img src={icon_arrow} className="m-auto h-4 w-3 mt-5"/>
                </div>
            </div>

            <div className="flex flex-col xs:flex-row text-center md:text-left bg-white rounded-2xl mt-6 py-6 w-full md:w-4/5 mx-auto md:py-10 md:mt-14">
                <div className="xs:w-1/2 xs:py-6 md:py-0 md:flex">
                    <div className="flex flex-col md:w-1/2 md:pl-8 md:border-r-[1px] border-gray-300">
                        <span className="text-xs font-medium text-MyDarkGray">IP ADDRESS</span>
                        <span className="text-xl font-medium mt-1 md:mt-3 sm:text-2xl ">192.212.<br className="hidden md:block lg:hidden"/>174.101</span>
                    </div>
                    <div className="flex flex-col mt-4 xs:mt-10 md:mt-0 md:w-1/2 md:pl-8 md:border-r-[1px] border-gray-300">
                        <span className="text-xs font-medium text-MyDarkGray">LOCATION</span>
                        <span className="text-xl font-medium mt-1 md:mt-3 sm:text-2xl">Brooklyn, NY <br className="hidden md:block"/>10001</span>
                    </div>
                </div>
                <div className="xs:w-1/2 xs:py-6 md:py-0 md:flex md:pl-8">
                    <div className="flex flex-col mt-4 xs:mt-0 md:w-1/2 md:border-r-[1px] border-gray-300">
                        <span className="text-xs font-medium text-MyDarkGray">TIMEZONE</span>
                        <span className="text-xl font-medium mt-1 md:mt-3 sm:text-2xl">UTC -05:00</span>
                    </div>
                    <div className="flex flex-col mt-4 xs:mt-10 md:mt-0 md:w-1/2 md:pl-8">
                        <span className="text-xs font-medium text-MyDarkGray">ISP</span>
                        <span className="text-xl font-medium mt-1 md:mt-3 sm:text-2xl ">SpaceX <br className="hidden md:block"/> Starlink</span>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default App
