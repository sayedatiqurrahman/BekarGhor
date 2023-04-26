import { createContext, useContext, useState } from 'react'

import Navbar from './components/Navbar'
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from './components/Footer'
export const JobsContext = createContext([])
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const jobs = useLoaderData()

  return (
    <JobsContext.Provider value={jobs}>
      <Navbar />


      <div className='min-h-[calc(100vh-88px)]'>
        <Outlet />
      </div>

      <Footer />
    </JobsContext.Provider>
  )
}

export default App
