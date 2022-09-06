import React from 'react'
import {
    account,
    asset,
    chat,
    dropdown,
    logo,
    menu,
    notification,
    search,
    user,
} from '../../assets/Navbar'

const Navbar: React.FC = () => {
    return (
        <div className="bg-[#1D1B1B] w-full text-xl text-[#FBFBFB] py-9 px-28 flex justify-between items-center">
            <div className="flex items-center gap-[90px]">
                <span className="flex items-center gap-2">
                    <img src={logo} alt="Logo" />
                    <p>Ark</p>
                </span>
                <span className="flex items-center gap-2">
                    <img src={asset} alt="Asset" />
                    <p>Asset</p>
                    <img src={dropdown} alt="" />
                </span>
                <span className="flex items-center gap-2">
                    <img src={account} alt="Account" />
                    <p>Account</p>
                </span>
            </div>
            <div className="flex items-center gap-7">
                <span className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="h-9 rounded-[10px] px-8 w-[189px] placeholder-[#1D1B1B] text-[#1D1B1B]"
                    />
                    <img
                        src={search}
                        alt="search icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                    />
                </span>

                <span className="h-9 w-9 relative flex justify-center items-center rounded-full bg-[#FBFBFB]">
                    <img
                        src={notification}
                        alt="notification"
                        className="h-1/2"
                    />
                    <span className="h-2 w-2 rounded-full absolute top-0 right-0 bg-brown"></span>
                </span>
                <span className="flex items-center gap-2">
                    <span className="relative">
                        <img src={chat} alt="chat" className="h-8" />
                        <span className="h-2 w-2 rounded-full absolute -top-1 -right-1 bg-brown"></span>
                    </span>
                    <span>
                        <img src={dropdown} alt="dropdown" />
                    </span>
                </span>
                <span className="flex items-center">
                    <img src={menu} alt="menu" className="h-7" />
                </span>
                <span className="flex items-center gap-2">
                    <span>
                        <img src={user} alt="User" className="h-9" />
                    </span>
                    <span>
                        <img src={dropdown} alt="dropdown" />
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Navbar
