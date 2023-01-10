// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import './Style.css'


function ProjectCarousel() { 

    const handleDragStart = (e) => e.preventDefault();
    const items = itemData.map((data) => {

        return (
            <div className='my-1'
                style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', border:'2px solid white', height:'300px', borderRadius: "10px", padding:'5px', margin:'10px'
                }}>

                <img src={data.img} className='mx-2' alt={data.title} height="200em" width="100%" style={{ marginBottom: 10, borderRadius: "10px", backgroundSize:'cover'  }} onDragStart={handleDragStart} role="presentation" />
                <span className='text-muted'>{data.title}</span>
            </div>
        )
    })

    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 2
        }
    }

    return (
        <div className='banner-container'>
            <h2 className='text-center my-4'>Some of our key projects</h2>
            <div style={{ height: "70%", display: 'flex', alignItems: 'center', paddingBottom: '15px' }}>
                <AliceCarousel
                    items={items}
                    mouseTracking
                    infinite
                    disableButtonsControls
                    disableDotsControls
                    autoPlay
                    animationDuration={1500}
                    autoPlayInterval={1000}
                    responsive={responsive}
                />
            </div>
        </div>

    )
}

export default ProjectCarousel;



const itemData = [
    {
        id: 1,
        img: 'https://chintglobal.com/blog/wp-content/uploads/solar-power-plant-knowledge-important-featured-banner.jpg',
        title: 'Suncreaft Energy',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isppadone: false
      },
      {
        id: 2,
        img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/PV_Soundless_Freising.jpg',
        title: "Reclair Energy",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isppadone: true
      },
    //   {
    //     id: 3,
    //     img: 'https://m.economictimes.com/thumb/msid-69198850,width-1200,height-900,resizemode-4,imgsize-603299/how-to-build-a-commercial-solar-power-plant-in-india.jpg',
    //     title: 'NTPC taps solar power with floating plant',
    //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //     isppadone: false
    //   },
    //   {
    //     id: 4,
    //     img: 'https://www.getbengal.com/uploads/story_image/Sagardighi-floating-power-plant.jpg',
    //     title: 'Floating solar power project inaugurated',
    //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //     isppadone: true
    
    //   },
    //   {
    //     id: 6,
    //     img: 'https://balkangreenenergynews.com/wp-content/uploads/2021/05/hydropower-plants-vrbas-solar-power-plants-ers.jpg',
    //     title: 'Solar Power Plant: Types, Technologies & All About Solar Power System',
    //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //     isppadone: true
    //   },
    //   {
    //     id: 7,
    //     img: 'https://4.imimg.com/data4/JD/XL/MY-1106662/solar-power-plant-500x500.jpg',
    //     title: 'Solar PV and PV Power Plants introductory training course 2 days',
    //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //     isppadone: true
    //   },
    //   {
    //     id: 8,
    //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ia6MrNiL3W9ewpV6-pHep80znEadaWFdVg&usqp=CAU',
    //     title: "Oil India Limited Issues EoI for 100 MW Solar Plant",
    //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //     isppadone: false
    //   },
    //   {
    //     id: 9,
    //     img: 'https://imechewebresources.blob.core.windows.net/imeche-web-content/images/default-source/default-album/solar-power.jpg?sfvrsn=e3b1c112_0',
    //     title: 'Solar Power Plant – Types, Components, Layout and Operation',
    //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //     isppadone: false
    //   },
    //   {
    //     id: 10,
    //     img: 'https://www.tuv.com/content-media-files/master-content/services/products/1623-tuv-rheinland-warranty-inspection-services-for-solar-power-plants/tuv-rheinland-warranty-inspection-shutterstock_1614874936_core_2_2_1.jpg',
    //     title: 'solar power plant is also known as the Photovoltaic (PV) power plant.',
    //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //     isppadone: true
    //   },
    //   {
    //     id: 11,
    //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHNvOjLV-4ndEbfvv-tVBEh2TpJocoTcv9lRM5dJvvKSkqHTyqWcv0CrdozQVg2Ghf_U&usqp=CAU',
    //     title: "Solar Plant Aims to be ‘Benchmark of Excellence’",
    //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //     isppadone: false
    //   },
    //   {
    //     id: 12,
    //     img: 'https://ec.europa.eu/regional_policy/rest/projects/upload/4126.jpg',
    //     title: 'NTPC taps solar power with floating plant',
    //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //     isppadone: true
    //   },
];