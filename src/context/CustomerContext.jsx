/* eslint-disable react-refresh/only-export-components */
import {createContext, useState, useEffect} from 'react'
import api from '../services/api'


export const CustomerContext = createContext()

export const CustomerProvider = ({children}) => {
    const [customer, setCustomer] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect (() => {
        async function fetchCustomer () {
            try{
                const response = await api.get('customers/6aae6728453885d368af4ff9') 
                // console.log(response.data);
                
                setCustomer(response.data)
            } catch (error) {
                console.error(error);
                setError('Failed to load customer')
            } finally {
                setLoading(false)
            }
        }

        fetchCustomer()
    }, [])

    return (
        <CustomerContext.Provider value ={{customer, setCustomer, loading, error}}>
            {children}
        </CustomerContext.Provider>
    )
}




