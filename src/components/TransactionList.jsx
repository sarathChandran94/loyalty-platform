// import React from 'react'



const TransactionList = ({transactions}) => {
  return (
    <>
        <div className="rounded-xl bg-white p-6 shadow">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800"> Recent Transactions </h2>
              <button className="text-sm text-blue-600 hover:underline"> View All </button>
            </div>
            <div className="mt-4 divide-y">
                {transactions.map( (transaction) => (
                  <>
                  <div
                    key={transaction.id}
                    className='flex items-center justify-between py-4'>
                  </div>
                  <div>
                      <p className="font-medium text-gray-700">{transaction.description}</p>
                      <p className="font-sm text-gray-500">{transaction.date}</p>
                  </div>
                  <span className={transaction.type === 'earned' ? "font-semibold text-green-600" : "font-semibold text-red-600"}>
                    {transaction.points > 0 ? "+" : ""}
                    {transaction.points}
                  </span>
                  </>
                ))}
            </div>
        </div>
    </>
  )
}

export default TransactionList
