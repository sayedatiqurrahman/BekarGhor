import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { JobsContext } from '../App';

const setDetailsId = id => {
    localStorage.setItem('detailsId', id);
}


const getDetailsId = () => {
    const getValue = JSON.parse(localStorage.getItem('detailsId'))
    return getValue;
}




// Fake DB

// use local storage to manage cart data
const addToDb = id => {
    let applied = getapplied();
    // add quantity
    const quantity = applied[id];
    if (!quantity) {
        applied[id] = id;
        toast.success('Here is your toast.')
    }
    else {
        toast.error('Here is your toast.🔥')
    }
    localStorage.setItem('applied', JSON.stringify(applied));
}

const removeFromDb = id => {
    const applied = getapplied();
    if (id in applied) {
        delete applied[id];
        localStorage.setItem('applied', JSON.stringify(applied));
    }
}

const getapplied = () => {
    let applied = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('applied');
    if (storedCart) {
        applied = JSON.parse(storedCart);
    }
    return applied;
}

const deleteapplied = () => {
    localStorage.removeItem('applied');
}

const filtering = () => {
    const AllJobs = useContext(JobsContext)
    const appliedID = getapplied()
    const arr = [];
    for (const props in appliedID) {
        let apply = AllJobs.find(aj => aj.id == props)
        if (apply) {
            arr.push(apply)
        }
    }
    return arr;
}
export {
    filtering,
    setDetailsId,
    getDetailsId,
    addToDb,
    removeFromDb,
    getapplied,
    deleteapplied
};