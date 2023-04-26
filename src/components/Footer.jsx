import React from 'react';
import icons from '../assets/Icons/Group.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-black py-[130px] text-[#ffffffab]'>
            <div className='MyContainer divide-y divide-[#ffffff3d]'>
                <div className='grid grid-cols-6 gap-5 pb-12'>
                    <ul className='col-span-2'>
                        <li className='text-3xl text-white'><Link to='/'>BekarGhor</Link></li>
                        <li className='my-3 leading-6'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</li>
                        <li><img className='h-10' src={icons} alt="" />
                        </li>
                    </ul>
                    <ul>
                        <li className='fHeadline'>Company</li>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                    <ul>
                        <li className='fHeadline'>Product </li>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                    <ul>
                        <li className='fHeadline'>Support</li>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                    <ul>
                        <li className='fHeadline'>Contact</li>
                        <li>524 Broadway , NYC</li>
                        <li>+1 777-978-5570</li>
                    </ul>

                </div>
                <div className='flex justify-between pt-12 flex-wrap'>
                    <p>@2023 BekarGhor. All Rights Reserved</p>
                    <p>Powered by BekarGhor</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;