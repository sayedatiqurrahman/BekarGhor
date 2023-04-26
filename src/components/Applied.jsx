import React, { useContext, useState } from 'react';
import Header from './subComponents/header';
import Dropdown from './subComponents/Dropdown';
import { filtering } from '../utility/utility';
import AppliedCard from './subComponents/AppliedCard';


const Applied = () => {
    const title = 'Applied Jobs'
    const data = filtering()
    const [applied, setApplied] = useState(data)
    const [filter, setFilter] = useState(false)
    const handleRemoteJob = () => {
        let apply = data.filter(aj => aj.remoteOrOnsite == 'Remote')
        setApplied([...apply])
        setFilter(true)
    }
    console.log(applied)
    const handleOnsiteJob = () => {
        let apply = data.filter(aj => aj.remoteOrOnsite == 'Onsite')
        setApplied([...apply])
        setFilter(false)
    }
    const handleAllJob = () => {
        setApplied(data)
        setFilter(!filter)
    }
    return (
        <>
            <Header title={title} />

            <div className='MyContainer relative'>
                <div className='my-8'>
                    <Dropdown handleRemoteJob={handleRemoteJob} handleOnsiteJob={handleOnsiteJob} handleAllJob={handleAllJob} />
                </div>
                <br /><br />
                <div className='my-10'>
                    {
                        applied?.map((job) => <AppliedCard key={job.id} job={job} />)}
                </div>

            </div >
        </>
    );
};

export default Applied;