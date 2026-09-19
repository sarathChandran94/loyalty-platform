/* eslint-disable react-refresh/only-export-components */
import {createContext, useState} from 'react'

export const CustomerContext = createContext()

export const CustomerProvider = ({children}) => {
    const [customer, setCustomer] = useState({
        id: 1,
        name: 'John',
        email: 'john@example.com',
        points: 2450,
    })

    return (
        <CustomerContext.Provider value ={{customer, setCustomer}}>
            {children}
        </CustomerContext.Provider>
    )
}




