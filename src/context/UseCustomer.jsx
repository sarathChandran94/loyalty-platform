import { useContext } from "react"
import { CustomerContext } from "./CustomerContext"

export const useCustomer = () => {
    return useContext(CustomerContext)
}