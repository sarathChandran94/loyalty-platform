
import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Dashboard } from './pages/Dashboard'
import { Rewards } from './pages/Rewards'
import { Transactions } from './pages/Transactions'
import { Profile } from './pages/Profile'

// import { useEffect, useState } from 'react'
// import api from './services/api'

function App() {
// for testing api endpoint

// const [message, setMessage] = useState('Connecting to server')

// useEffect(() => {
//   api.get('/health')
//       .then((response) => {
//     setMessage(response.data.message)
//   })
//       .catch((error) => {
//         console.log(error);
//         setMessage('Could not connect to the server')
//       })
// }, [])

  return(
    <BrowserRouter>
    <>
      <div className='flex min-h-screen bg-gray-100'>
        <Sidebar />
        <div className='flex-1'>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={<Dashboard />}
            />
            <Route
              path='/dashboard'
              element={<Dashboard />}
            />
            <Route
              path='/transactions'
              element={<Transactions />}
            />
            <Route
              path='/rewards'
              element={<Rewards />}
            />
            <Route
              path='/profile'
              element={<Profile />}
            />
          </Routes>
        </div>
      </div>
    </>
    </BrowserRouter>

    // <div className='flex min-h-sreen items-center justify-center' >
    //   <h1 className='text-2xl font-bold'>{message}</h1>
    // </div>

  )
}

export default App
