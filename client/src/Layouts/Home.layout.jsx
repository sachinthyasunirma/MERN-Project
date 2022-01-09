import React from 'react'
import FoodTab from '../Components/FoodTab';
import Navbar from '../Components/Navbar';

function HomeLayout({ props , children}) {
    return(
        <div>
            <Navbar />
            <FoodTab />
            <div className='container mx-auto px-4 lg:px-20'>{children}</div>
        </div>
    )
}

export default HomeLayout;
