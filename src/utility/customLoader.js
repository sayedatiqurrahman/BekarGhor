import React from 'react';

const customLoader = async () => {
    const loadedData = await fetch('jobs.json')
    const jobs = await loadedData.json()

    return jobs
};

export default customLoader;