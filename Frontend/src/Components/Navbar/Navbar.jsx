import React from 'react'


const NavSm =()=>{
    return(
        <>
        <h1>h</h1>
        </>
    )
}
const NavMd =()=>{
    return(
        <>
        <h1>r</h1>
        </>
    )
}
const NavLg =()=>{
    return(
        <>
        <h1>u</h1>
        </>
    )
}
function Navbar() {
    return (
        <>
        <div className="bg-transparent ">
            <div className='md:hidden'>
                <NavSm/>
            </div>
            <div className='hidden md:block lg:hidden'>
                <NavMd/>
            </div>
            <div className='hidden lg:block'>
                <NavLg/>
            </div>
        </div> 
        </>
    )
}

export default Navbar
