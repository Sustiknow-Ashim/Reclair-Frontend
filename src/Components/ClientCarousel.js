// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import './Style.css'


function ClientCarousel() { 

    const handleDragStart = (e) => e.preventDefault();
    const items = itemData.map((data) => {

        return (
            <div className='my-1'
                style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', 
                }}>

                <img src={data.img} className='mx-2' alt={data.title} height="200em" width="200em" style={{ marginBottom: 10, borderRadius: "50%", }} onDragStart={handleDragStart} role="presentation" />

            </div>
        )
    })

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 6
        }
    }

    return (
        <div className='banner-container'>
            <h2 className='text-center my-4'>Some of our key clients</h2>
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

export default ClientCarousel;



const itemData = [
    {
        id: 1,
        img: 'https://media.9curry.com/uploads/organization/image/2425/wbreda-logo.png',

    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWe1oH2EtbjC3dxs4AACNK_hKRhHsmK4jcFQ&usqp=CAU",
    },
    {
        id: 3,
        img: "https://bl-i.thgim.com/public/economy/agri-business/5hhhtw/article36802609.ece/alternates/LANDSCAPE_1200/APEDA-logojpg",

    },
    {
        id: 4,
        img: 'http://www.hpnet.org/uploads/4/9/9/1/49912637/s658287647340348433_p31_i1_w500.jpeg',

    },
    {
        id: 5,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Emblem-Ramakrishna-Mission-Transparent.png/200px-Emblem-Ramakrishna-Mission-Transparent.png',
    },
    {
        id: 6,
        img: 'https://pbs.twimg.com/profile_images/1277602024092131329/bAUh3tJy_400x400.jpg',
    },
    {
        id: 7,
        img: 'https://pbs.twimg.com/profile_images/1499684051392815105/B9sDeiWO_400x400.jpg',
    },
    {
        id: 8,
        img: 'https://www.pngitem.com/pimgs/m/542-5428046_german-cooperation-logo-vector-hd-png-download.png',

    },
    {
        id: 9,
        img: 'https://files.dimagi.com/wp-content/uploads/2019/12/GIZ-logo.jpg',

    },
    {
        id: 10,
        img: 'https://www.realtynmore.com/wp-content/uploads/2016/07/The-Energy-and-Resources-Institute.jpg',
    },
    {
        id: 11,
        img: 'https://static.toiimg.com/photo/msid-66235173/66235173.jpg',

    },
    {
        id: 12,
        img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Seal_of_the_Reserve_Bank_of_India.svg',
    },
];