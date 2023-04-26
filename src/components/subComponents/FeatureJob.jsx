import React, { useEffect, useState } from 'react';

import Card from './card';
const FeatureJob = () => {

    const [change, setChange] = useState(true)

    const [render, setRender] = useState()
    const [jobs, setJobs] = useState()
    useEffect(() => {
        fetch('jobs.json').then(res => res.json()).then(data => {
            setJobs(data);
            setRender(data);
        })
    }, [])

    if (change && jobs?.length === 6) {
        setJobs(jobs.slice(0, 4))

    }
    const handleCardItems = () => {
        setChange(false)
    }
    const handleCardItems2 = () => {
        setChange(true)
    }
    return (
        <>
            <div className='text-center'>
                <h1 className='headline2'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='mt-[130px] grid md:grid-cols-2 gap-5'>
                {
                    change ? jobs?.map((item) => <Card key={item.id} item={item}></Card>)
                        : render?.map((item) => <Card key={item.id} item={item}></Card>)
                }

            </div >
            <div className='text-center mb-[130px]'>
                {change ? <button onClick={handleCardItems} className="btn my-5">
                    See All Jobs
                </button> : <button onClick={handleCardItems2} className="btn my-5">
                    See Less Jobs
                </button>}
            </div>
        </>
    );
};

export default FeatureJob;