import React from 'react';

const Category = ({ category }) => {

    return (
        <div>
            <>
                <div className='text-center'>
                    <h1 className='headline2'>
                        Job Category List
                    </h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className='grid my-10 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                    {
                        category.map((item) => {
                            const { logo, name, jobsAvailable } = item
                            return (
                                <div key={item.id} className='bg-category rounded-lg  py-4 pl-6 '>
                                    <div className='text-center p-4 bg-1 h-16 w-16 '>
                                        <img className='h-10' src={logo} alt={name} />
                                    </div>
                                    <div className=''>
                                        <h3 className='text-xl font-extrabold text-[#474747]'>{name}</h3>
                                        <p className='font-medium text-[#A3A3A3]'>{jobsAvailable}  Jobs Available</p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </>
        </div>
    );
};

export default Category;