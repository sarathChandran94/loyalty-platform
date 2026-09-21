import RewardCard from '../components/RewardCard'
import {rewards} from '../data/DummyData'

export const Rewards = () => {
    return(
        <>
        <div className="p-6">
            <h1 className="text-2xl font-bold"> Rewards </h1>
            <p className="mt-2 text-gray-500">Browse and redeem your rewards.</p>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 mb-4'>
            {/* {rewards.map((reward) => ( */}
                <RewardCard
                    rewards={rewards}
                />
            {/* ))} */}
        </div>
        
        </>
    )
}

// export default Rewards