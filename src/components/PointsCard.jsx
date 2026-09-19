// import React from 'react'
const PointsCard = ({points}) => {
  // console.log(points)
  return (
    <>
        <div className="rounded-xl bg-blue-600 p-6 text-white shadow-md ">
            <p className="text-sm opacity-80"> Available Points </p>
            <h2 className="text-4xl mt-2 font-bold"> {points} </h2>
            <p className="mt-2 text-sm opacity-80"> Keep earning to unlock more rewards!! </p>
        </div>
    </>
  )
}

export default PointsCard