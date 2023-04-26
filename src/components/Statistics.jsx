import React from 'react';
import Header from './subComponents/header';
import RadarChart from './subComponents/RadarChart';
import Example from './subComponents/RadarChart';


const Statistics = () => {
    const title = 'Statistics'
    return (
        <>
            <Header title={title} />

            <div className='MyContainer'>
                <h1 className='h1'>Assignment Chart</h1>
                <div>
                    <RadarChart />
                </div>
            </div>
        </>
    );
};

export default Statistics;