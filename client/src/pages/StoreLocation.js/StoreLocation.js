import React, { useState } from 'react'
import useTitle from '../../hooks/useTitle'

const StoreLocation = () => {
    useTitle("Stores")
    const [selectedTab, setSelectedTab] = useState(1)
    const storesData = [
        {
            name: "Maxima Tower",
            location: "Katihar,Bihar,India",
            shop: "Fourth Floor, Shop No: 32 B",
            img: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?cs=srgb&dl=pexels-shattha-pilabut-135620.jpg&fm=jpg",
            mapImg: "https://i.stack.imgur.com/B6fEt.png",
            phone: "+918598562356",
            duration: "9.00pm - 10.00pm",
            onDay: "Monday - Saturday"
        },
        {
            name: "Kalindi",
            location: "Patliputra Colony,Patna,India",
            shop: "Third Floor, Shop No: 86/2 A",
            img: "https://thumbs.dreamstime.com/b/women-s-clothing-store-22858928.jpg",
            mapImg: "https://joomly.net/frontend/web/images/googlemap/map.png",
            phone: "+918598562356",
            duration: "9.00pm - 10.00pm",
            onDay: "Monday - Saturday"
        },
        {
            name: "SK Tower Shopping Complex",
            location: "Purnia,Bihar,India",
            shop: "Fifth Floor, Shop No: 24 C",
            img: "https://thumbs.dreamstime.com/b/saint-petersburg-russia-circa-august-inside-mango-man-store-galeria-shopping-center-clothing-design-manufacturing-105145770.jpg",
            mapImg: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1",
            phone: "+918598562356",
            duration: "9.00pm - 10.00pm",
            onDay: "Monday - Saturday"
        },
    ]
    return (
        <section className='flex lg:gap-16 gap-8 lg:flex-row flex-col'>
            <div className='lg:w-1/3'>
                {/* SIDE MENU */}
                <div className="sticky top-20 bg-white py-8 px-4 rounded-xl shadow-lg">
                    <h1 className='text-xl font-bold mb-5 pl-8'>Shop Location</h1>
                    <div className='flex lg:flex-col lg:gap-10 lg:flex-no-wrap flex-row flex-wrap gap-1 text-[#bbb]'>
                        {
                            storesData?.map((item, index) => <div
                                key={index}
                                onClick={() => { setSelectedTab(index + 1); window.scrollTo({ top: 0, behavior: "smooth" }) }}
                                className={`cursor-pointer ${selectedTab === index + 1 && "text-colorGreen"}`}
                            >
                                <span className='flex lg:items-start md:items-start items-center gap-1'>
                                    <lord-icon
                                        target="span"
                                        src="https://cdn.lordicon.com/fihkmkwt.json"
                                        trigger="hover"
                                        colors={selectedTab === (index + 1) ? "primary:#16c79e,secondary:#16c79e" : "primary:#bbb,secondary:#bbb"}
                                        style={{ width: "30px", height: "30px" }}>
                                    </lord-icon>
                                    <div>
                                        <h2 className='font-bold lg:text-md md:tex-md text-sm'>{item.name}</h2>
                                        <p className='lg:text-md md:text-sm text-xs lg:block md:block hidden'>{item.location}</p>
                                    </div>
                                </span>
                            </div>)
                        }
                    </div>
                </div>
            </div>

            <div className='lg:w-2/3'>
                {
                    storesData?.map((item, index) => selectedTab === (index + 1) &&
                        <div key={index}>
                            <div data-aos="fade-left">
                                <img src={item.img} alt="" className='h-[300px] w-[500px] object-cover' />
                                <h1 className='mt-6 text-3xl font-bold'>{item.name}</h1>
                                <p className='mt-2'>{item.location}</p>
                            </div>
                            <div data-aos="fade-up">
                                <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-5 md:gap-4 gap-2'>
                                    <div className='p-5 rounded-lg bg-white hover:shadow-lg flex flex-col gap-2' >
                                        <lord-icon
                                            target="div"
                                            src="https://cdn.lordicon.com/slduhdil.json"
                                            trigger="hover"
                                            colors="primary:#16c79e"
                                            style={{ width: "35px", height: "35px" }}>
                                        </lord-icon>
                                        {item.shop}
                                    </div>
                                    <div className='p-5 rounded-lg bg-white hover:shadow-lg flex flex-col gap-2' >
                                        <lord-icon
                                            target="div"
                                            src="https://cdn.lordicon.com/tftaqjwp.json"
                                            trigger="hover"
                                            colors="primary:#16c79e"
                                            style={{ width: "35px", height: "35px" }}>
                                        </lord-icon>
                                        {item.phone}
                                    </div>
                                    <div className='p-5 rounded-lg bg-white hover:shadow-lg flex flex-col gap-2' >
                                        <lord-icon
                                            target="div"
                                            src="https://cdn.lordicon.com/qmuwmmnl.json"
                                            trigger="hover"
                                            colors="primary:#16c79e"
                                            style={{ width: "35px", height: "35px" }}>
                                        </lord-icon>
                                        {item.duration}
                                    </div>
                                    <div className='p-5 rounded-lg bg-white hover:shadow-lg flex flex-col gap-2' >
                                        <lord-icon
                                            target="div"
                                            src="https://cdn.lordicon.com/qtxqkhzr.json"
                                            trigger="hover"
                                            colors="primary:#16c79e"
                                            style={{ width: "35px", height: "35px" }}>
                                        </lord-icon>
                                        {item.onDay}
                                    </div>
                                </div>

                                <div className='mt-12' >
                                    <img src={item.mapImg} alt="" className='w-full h-80 object-cover' />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default StoreLocation