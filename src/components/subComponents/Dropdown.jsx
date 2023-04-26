import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dropdown = ({ handleOnsiteJob, handleRemoteJob, handleAllJob }) => {

    return (
        <div className='absolute top-0 right-0'>
            <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn-outline bg-gray-100  m-1  ">SHORT BY <span className='ml-4'> <FontAwesomeIcon icon={faArrowDownWideShort} /></span></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={handleAllJob}><a>All Applied</a></li>
                    <li onClick={handleRemoteJob}><a>Remote</a></li>
                    <li onClick={handleOnsiteJob}><a>Onsite</a></li>

                </ul>
            </div>
        </div>
    );
};

export default Dropdown;