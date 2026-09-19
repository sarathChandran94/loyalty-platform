// import React from 'react'
 

const RewardCard = ({rewards, onRedeem}) => {
  return (
      <>
    {rewards.map ((reward) => (
        <div className="rounded-xl bg-white p-5 shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-xl">🎁</div>
            <h3 className="mt-4 font-semibold text-gray-800">
            {reward.name}
            </h3>
            <p className="text-sm text-gray-500">
            {reward.points} points
            </p>
            <p className="mt-1 text-xs text-gray-400">
            {reward.stock} remaining
            </p>
            <button 
            onClick={() => onRedeem?.(reward)}
            className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
            Redeem
            </button>
        </div>
  ))}
  </>
  )
}
export default RewardCard