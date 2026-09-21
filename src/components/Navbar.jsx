import { useCustomer } from "../context/UseCustomer"

export const Navbar = () => {
  const {customer} = useCustomer()
  return (
    <>
        <header className="h-16 bg-white border-b flex items-center justify-between px-6"> 
            <h2 text-lg font-semibold text-gray-800> Dashboard </h2>
            <div className="flex items center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">{customer?.name.charAt(0)}</div>
                <span className="text-sm font-medium pt-2 text-gray-700"> {customer?.name} </span>
            </div>
        </header>
    </>
  )
}

