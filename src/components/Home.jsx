import React, { useEffect, useState } from 'react';
import person from "../assets/P3OLG.png"
import Category from './subComponents/Category';
import { useLoaderData } from 'react-router-dom';
import FeatureJob from './subComponents/FeatureJob';
import customLoader from '../utility/customLoader';
const Home = () => {


    const category = useLoaderData()
    return (
        <>
            {/* Header section */}
            <section className=' bg-gray-100 pt-20 '>
                <div className='MyContainer flex  justify-between flex-col-reverse md:flex-row items-center'>
                    <div className="w-[90%] md:w-1/2 py-20">
                        <h1 className='-mt-16 md:mt-0 text-4xl md:text-7xl font-bold'>One Step  <br /> Closer To Your <br /><span className='text-[#5934be]'>Dream Job</span></h1>
                        <p className='md:w-[500px] my-3'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <a href="../#featureJob"> <button className='btn'>Get Started</button></a>
                    </div>
                    <div className='flex'>
                        <img className='sm:h-[400px]  md:h-[450px] md:mt-36 lg:mt-16' src={person} alt="" />

                    </div>
                </div>

            </section>


            {/* Category section */}

            <section className='MyContainer my-[130px]'>
                <Category category={category} />

            </section>

            {/* Featured job section */}

            <section id='featureJob' className='MyContainer'>
                <FeatureJob />

            </section>
        </>
    );
};

export default Home;