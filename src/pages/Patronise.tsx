import React from 'react'
import { map } from '../assets/Sidebar'
import Sidebar from '../components/Sidebar'

const Patronise: React.FC = () => {
    return (
        <div className="w-full">
            <Sidebar />
            <div className="bg-red-700 ml-[440px] w-[calc(100%_-_440px)] h-[calc(100vh_-_108px)]">
                <img src={map} alt="map" className="w-full h-full" />
            </div>
        </div>
    )
}

export default Patronise
