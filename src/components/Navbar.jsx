import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='bg-gray-100'>
            <div className='flex  text-center flex-wrap  justify-between items-center py-4 MyContainer'>
                <Link to='/'>
                    <h1 className='h1 text-[#5934be]'>BekarGhor</h1>
                </Link>
                <div className={`flex flex-col md:hidden  gap-5 ${open ? "absolute top-0 left-1/2 -translate-x-1/2 w-full py-4 bg-slate-100" : 'hidden'}`}>
                    <NavLink className='default' to='/'><FontAwesomeIcon icon={faHome} /></NavLink>

                    <NavLink className='default' to='statistics'> Statistics</NavLink>

                    <NavLink className='default' to='applied'> Applied Jobs</NavLink>

                    <NavLink className='default' to='blogs'> Blogs</NavLink>
                </div>

                <div className={`hidden md:flex flex-col md:flex-row  gap-5 `}>
                    <NavLink className='default' to='/'><FontAwesomeIcon icon={faHome} /></NavLink>

                    <NavLink className='default' to='statistics'> Statistics</NavLink>

                    <NavLink className='default' to='applied'> Applied Jobs</NavLink>

                    <NavLink className='default' to='blogs'> Blogs</NavLink>
                </div>
                <a href="../#featureJob"  ><button className='btn md:z-10'>Start Applying</button></a>
                <FontAwesomeIcon className='text-2xl md:hidden z-10' onClick={() => setOpen(!open)} icon={faBars} />
            </div>
        </div>
    );
};

export default Navbar;