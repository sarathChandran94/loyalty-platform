// import React from 'react'
import PointsCard from '../components/PointsCard'
import TransactionList from '../components/TransactionList'
import RewardCard from '../components/RewardCard'
import {transactions, rewards} from '../data/DummyData'
// import { useState } from 'react'
import { useCustomer } from '../context/UseCustomer'

export const Dashboard = () => {
const {customer, setCustomer} = useCustomer()
// const [points, setPoints] = useState(5000)
const handleRedeem = (reward) => {
    // console.log(`point bef setPoints: ${points}`);
    if (customer.points < reward.points) {
        alert('You do not have enough points!')
        return
    }
    
    // setPoints(points - reward.points)
    // console.log(`point aft setPoints: ${points}`);
    setCustomer({
        ...customer,
        points: customer.points - reward.points,
    })
    
    alert(`${reward.name} redeemed successfully`)
}

  return (
    <>
        <div className="p-6">
            <h1 className=" text-2xl font-bold text-gray-800"> Welcome back, {customer.name}</h1>
            <p className='mt-1 text-gray-500'>Here's what's happening with your rewards</p>
             {/* Statistics */}
            <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-3'>
                <PointsCard points={customer.points}/>
                
                <div className='rounded-xl bg-white p-6 shadow-md'>
                    <p className='text-sm text-gray-600'>Total Points Earned</p>
                    <h2 className='mt-2 text-3xl font-bold'>5,200</h2>
                </div>
                
                <div className='rounded-xl bg-white p-6 shadow-md'>
                    <p className='text-sm text-gray-600'>Points Redeemed</p>
                    <h2 className='mt-2 text-3xl font-bold'>2,750</h2>
                </div>
            </div>
            
            {/* Transactions */}
            <div className='mt-6'>
                <TransactionList transactions={transactions} />
            </div>
            
            {/* Rewards */}
            <div className='mt-6'>
                <h2 className='mb-4 text-lg font-semibold text-gray-800'>
                    Available Rewards:
                </h2>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    
                        <RewardCard 
                        rewards={rewards}
                        onRedeem={handleRedeem}
                        />
                    
                </div>
            </div>
        </div>
    </>
  )
}

