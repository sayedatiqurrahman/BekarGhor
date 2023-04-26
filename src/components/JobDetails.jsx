import React, { useContext } from 'react';
import Header from './subComponents/header';
import { JobsContext } from '../App';
import { addToDb, getDetailsId } from '../utility/utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faCircleDollarToSlot, faLocation, faMailBulk, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
const JobDetails = () => {
    const title = 'Job Details';
    const jobs = useContext(JobsContext)
    const ID = getDetailsId()
    const jobDetails = jobs.find(job => job.id === ID)

    const { id, jobDescription, jobResponsibilities, educationalRequirements, experiences, salary, jobTitle, contactInformation, location } = jobDetails;

    const handleApplyJobs = (id) => {
        addToDb(id)
    }
    return (
        <div>
            <Header title={title} />


            <div className='MyContainer grid pb-[130px] grid-cols-4 text-[#757575] gap-5'>
                <div className='col-span-3'>
                    <p>
                        <b>Job Description: </b>
                        {jobDescription}
                    </p>
                    <br />
                    <p>
                        <b>Job Responsibilities: </b>
                        {jobResponsibilities}
                    </p>

                    <br />
                    <p>
                        <b>Educational Requirements: </b>
                        <br /> {educationalRequirements}
                    </p>
                    <br />
                    <p>
                        <b>Experiences: </b>
                        <br /> {experiences}
                    </p>

                </div>
                <div>
                    <div className='bg-category p-4 rounded-lg divide-y  divide-[#7e8ffe33] '>
                        <div>
                            <h1 className='h text-[#1A1919] '>Job Details</h1>
                        </div>

                        <div className='my-6 pt-6'>
                            <p><FontAwesomeIcon className='text-[#7E90FE] pr-2' icon={faCircleDollarToSlot} /> <b>Salary :</b> {salary}</p>
                            <p><FontAwesomeIcon className='text-[#7E90FE] pr-2' icon={faCalendarDay} /> <b>Job Title :</b> {jobTitle}</p>

                            <br />
                            <h1 className='h text-[#1A1919] '>Contact Information</h1>
                        </div>

                        <div className='my-6 pt-6'>
                            <p><FontAwesomeIcon className='text-[#7E90FE] pr-2' icon={faPhone} /> <b>Phone :</b> {contactInformation.phone}</p>
                            <p><FontAwesomeIcon className='text-[#7E90FE] pr-2' icon={faMailBulk} /> <b>Email :</b> {contactInformation.email}</p>
                            <p><FontAwesomeIcon className='text-[#7E90FE] pr-2' icon={faLocation} /> <b>Address :</b> {location}</p>
                        </div>
                    </div>
                    {/* <hr className='bg-category' /> */}

                    <Link to="/"><button onClick={() => handleApplyJobs(id)} className="btn mt-5 w-full">Apply Now</button></Link>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;