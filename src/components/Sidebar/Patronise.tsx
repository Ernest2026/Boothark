import React, { Fragment, useState } from 'react'
import {
    cancel,
    dropdown,
    menu,
    search,
    sliders,
    cstar,
    wstar,
} from '../../assets/Sidebar'

type Data = {
    name: string
    address: string
    time: string
    tags: string[]
    image: string
    star: number
    review: number
}

const PatroniseSidebar: React.FC = () => {
    const [restaurant, setRestaurant] = useState<Data | null>(null)
    // const inputRef = useRef<HTMLInputElement>()
    const data: Data[] = [
        {
            name: 'Lesukaa Restaurant (Catering Service & Food Delivery)',
            address: 'Restaurant  Plot 337 Peter Odili Road Abuloma Best',
            time: 'Open 24 hours',
            tags: ['Dine-in', 'Takeaway', 'Delivery'],
            image: '/images/spagetti.png',
            star: 4.0,
            review: 39,
        },
        {
            name: 'Dominos Pizza Peter Odili, Port Harcourt',
            address:
                'Pizza   Plot 330 A/C Peter Odili Road, Port Harcourt, Rivers State.',
            time: 'Open until 22:00',
            tags: ['Dine-in', 'Curbside pickup', 'No-contact delivery'],
            image: '/images/pizza.png',
            star: 4.3,
            review: 221,
        },
        {
            name: 'Chicken Republic - Doxa Road',
            address: 'Fast Food   Doxa Family Church Rd.',
            time: 'Open until 22:00',
            tags: ['Dine-in', 'Takeaway', 'Delivery'],
            image: '/images/plantain.png',
            star: 4.6,
            review: 13,
        },
        {
            name: 'Country Creamery',
            address: 'Pizza   8 Okuru Abuloma Link Road Phalga',
            time: 'Open until 22:00',
            tags: ['Dine-in', 'Takeaway', 'Delivery'],
            image: '/images/coldstone.png',
            star: 4.4,
            review: 23,
        },
    ]
    return (
        <>
            <div className="w-full px-9 mb-3">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Takeout"
                        // ref={inputRef}
                        className="w-full py-2 pl-11 pr-[86px] rounded-lg placeholder-black text-black"
                    />
                    <span className="absolute left-0 top-0 h-full w-11 flex justify-center items-center">
                        <img src={menu} alt="menu icon" />
                    </span>
                    <div className="absolute top-0 right-0 h-full w-[86px] bg-brown flex items-center">
                        <span className="w-1/2 h-full flex justify-center items-center">
                            <img src={search} alt="search" />
                        </span>
                        <hr className="w-[1px] h-3/4 bg-white" />
                        <span className="w-1/2 h-full flex justify-center items-center">
                            <img src={cancel} alt="cancel" />
                        </span>
                    </div>
                </div>
                {restaurant === null && (
                    <div className="flex gap-1 mt-4">
                        <div className="px-[14px] py-[5px] flex justify-center items-center gap-2 rounded-full border border-white border-solid">
                            <p>Rating</p>
                            <span>
                                <img src={dropdown} alt="dropdown" />
                            </span>
                        </div>
                        <div className="px-[14px] py-[5px] flex justify-center items-center gap-2 rounded-full border border-white border-solid">
                            <p>Hours</p>
                            <span>
                                <img src={dropdown} alt="dropdown" />
                            </span>
                        </div>
                        <div className="px-[14px] py-[5px] flex justify-center items-center gap-2 rounded-full border border-white border-solid">
                            <span>
                                <img src={sliders} alt="filter" />
                            </span>
                            <p>More Filter</p>
                        </div>
                    </div>
                )}
            </div>

            {data.map((data, idx) => (
                <div key={idx}>
                    <hr />
                    <div className="px-9 py-8 flex gap-6">
                        <div className="w-3/4">
                            <p
                                className="font-medium hover:underline cursor-pointer text-[17px]"
                                onClick={() => setRestaurant(data)}
                            >
                                {data.name}
                            </p>
                            <span className="flex items-center gap-1">
                                {data.star}
                                <span>
                                    <img src={cstar} alt="star" />
                                </span>
                                <span>
                                    <img src={cstar} alt="star" />
                                </span>
                                <span>
                                    <img src={cstar} alt="star" />
                                </span>
                                <span>
                                    <img src={cstar} alt="star" />
                                </span>
                                <span>
                                    <img src={wstar} alt="star" />
                                </span>
                                ({data.review})
                            </span>
                            <p className="text-sm">{data.address}</p>
                            <p className="text-sm">{data.time}</p>
                            <span className="text-sm mt-2 flex flex-wrap items-center gap-2">
                                {data.tags.map((tag, idx) => (
                                    <Fragment key={idx}>
                                        {idx !== 0 && (
                                            <span className="w-[2px] h-[2px] rounded-full bg-white"></span>
                                        )}
                                        <p>{tag}</p>
                                    </Fragment>
                                ))}
                            </span>
                        </div>
                        <div className="w-1/4">
                            <img
                                src={data.image}
                                alt="food"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PatroniseSidebar
