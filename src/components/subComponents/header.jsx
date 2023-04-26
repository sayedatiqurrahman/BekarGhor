import React from 'react';
import victor from '../../assets/All_Images/Vector-1.png'

const Header = ({ title }) => {
    return (
        <>
            <img className='absolute top-0 right-0 -z-0' src={victor} alt="" />
            <div className='h-80 bg-gray-100 flex -z-20 mb-[130px] justify-center items-center relative'>
                <h1 className='headline text-[#757575]'>{title}</h1>
                <img className='absolute bottom-0 left-0 -z-0 rotate-180' src={victor} alt="" />

            </div></>
    );
};

export default Header;