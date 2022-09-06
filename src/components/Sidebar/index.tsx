import React, { useState } from 'react'
import PatroniseSidebar from './Patronise'

type Switch = 'patronise' | 'bid'

const Sidebar = () => {
    const [value, setSwitch] = useState<Switch>('patronise')

    return (
        <div className="w-[440px] h-[calc(100%_-_108px)] fixed bg-black text-white flex flex-col overflow-x-scroll scrollbar-hidden">
            <div className="mt-12 mb-9 px-9 w-[230px] py-1 px-2 rounded-lg bg-white mx-auto flex gap-2">
                <span
                    className={`w-1/2 h-11 flex justify-center items-center rounded-lg cursor-default ${
                        value === 'patronise' ? 'bg-brown' : 'text-[#2C2C2C]'
                    }`}
                    onClick={() =>
                        setSwitch(value === 'patronise' ? 'bid' : 'patronise')
                    }
                >
                    Patronise
                </span>
                <span
                    className={`w-1/2 h-11 flex justify-center items-center rounded-lg cursor-default ${
                        value === 'bid' ? 'bg-brown' : 'text-[#2C2C2C]'
                    }`}
                    onClick={() =>
                        setSwitch(value === 'patronise' ? 'bid' : 'patronise')
                    }
                >
                    Bid
                </span>
            </div>
            <PatroniseSidebar />
        </div>
    )
}

export default Sidebar
