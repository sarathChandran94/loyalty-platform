import {transactions} from '../data/DummyData'

export const Transactions = () => {
    return(
        <>
         <div className="p-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold"> Transactions </h1>
                <p className="mt-2 text-gray-500">View your points transactions.</p>
            </div>
            {/* Transaction Table */}
            <div className='mt-6 overflow-hidden rounded-xl bg-white'>
                <div className='overflow-x-auto'>
                    <table className='w-full text-left'>
                        <thead className='border-b bg-gray-50'>
                            <tr>
                                <th className='px-6 py-4 text-sm font-semibold text-grat-600'>Description</th>
                                <th className='px-6 py-4 text-sm font-semibold text-grat-600'>Date</th>
                                <th className='px-6 py-4 text-sm font-semibold text-grat-600'>Type</th>
                                <th className='px-6 py-4 text-sm font-semibold text-grat-600'>Points</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y'>
                            {transactions.map((transaction) => (
                                <tr 
                                key={transaction.id}
                                className='hover:bg-gray-50'>
                                    <td className='px-6 py-4'>
                                        <p className='font-medium text-gray-800'>{transaction.description}</p>
                                    </td>
                                    <td className='px-6 py-4 text-sm text-gray-500'>
                                        {transaction.date}
                                    </td>
                                    <td className='px-6 py-4'>
                                        {transaction.type === 'earned' ? 
                                        (<span className='rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700'>Earned</span>): 
                                        (<span className='rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700'>Redeemed</span>)
                                        }
                                    </td>
                                    <td className={`px-6 py-4 text-right font-semibold ${transaction.points > 0 ? 'text-green-600': 'text-red-600'}`}>
                                        {transaction.points > 0 ? '+' : ''}
                                        {transaction.points.toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

// export default Transactions