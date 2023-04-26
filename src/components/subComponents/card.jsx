import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faLocation } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { setDetailsId } from '../../utility/utility';
const Card = ({ item }) => {
    const handleDetailsButton = (id) => {
        setDetailsId(id)
    }

    return (
        <div>
            <div className='rounded-lg shadow-md pl-10 pt-10' >

                <img className='mb-8 h-16' src={item.companyLogo} alt="" />
                <h1 className='h1 text-[#474747]'>{item.jobTitle}</h1>
                <p className='text-[#757575]'>{item.companyName}</p>
                <div className='flex gap-4 flex-wrap my-4'>
                    <button className='btn-outline'>
                        {item.fullTimeOrPartTime}
                    </button>
                    <button className='btn-outline'>
                        {item.remoteOrOnsite}
                    </button>
                </div>

                <div className='text-[#757575] flex flex-wrap gap-5'>
                    <p><FontAwesomeIcon icon={faLocation} /> {item.location}</p>

                    <p><FontAwesomeIcon icon={faCircleDollarToSlot} /> <b>Salary :</b> {item.salary}</p>
                </div>

                <Link to='/jobdetails'>
                    <button onClick={() => handleDetailsButton(item.id)} className="btn mt-6 mb-10">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;