import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faLocation } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { setDetailsId } from '../../utility/utility';
const AppliedCard = ({ job }) => {
    const handleDetailsButton2 = id => {
        setDetailsId(id)
    }
    const { id, companyLogo, companyName, fullTimeOrPartTime, remoteOrOnsite, salary, jobTitle, location } = job;
    return (
        <div className='flex justify-between my-8 shadow-md p-6 items-center'>
            <div className='h-60 w-60 flex justify-center items-center bg-[#F4F4F4] rounded-lg py-24 px-10'>
                <img className=' ' src={companyLogo} alt="" />
            </div>
            <div className='flex-grow pl-6'>
                <h1 className='h1'>{jobTitle}</h1>
                <p>{companyName}</p>
                <div className='flex gap-4 flex-wrap my-4'>
                    <button className='btn-outline'>
                        {fullTimeOrPartTime}
                    </button>
                    <button className='btn-outline'>
                        {remoteOrOnsite}
                    </button>
                </div>
                <div className='text-[#757575] flex flex-wrap gap-5'>
                    <p><FontAwesomeIcon icon={faLocation} /> {location}</p>

                    <p><FontAwesomeIcon icon={faCircleDollarToSlot} /> <b>Salary :</b> {salary}</p>
                </div>
            </div>
            <Link to='/jobdetails'>
                <button onClick={() => handleDetailsButton2(id)} className="btn mt-6 mb-10">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default AppliedCard;