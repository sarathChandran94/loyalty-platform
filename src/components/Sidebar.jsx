// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

export const Sidebar = () => {
  const navItems = [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
    {
      name: 'Rewards',
      path: '/rewards',
    },
    {
      name: 'Transations',
      path: '/transactions',
    },
    {
      name: 'Profile',
      path: '/profile',
    }
  ]
  return (
    <aside className='w-64 min-h-screen bg-white border-r p-6'>
        <h1 className="text-xl font-bold text-blue-600 mb-8">Sample Project</h1>
        <nav className='space-y-2'>
          {navItems.map( (item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({isActive}) => `block rounded-lg px-4 py-3 font-medium ${isActive ? 'bg-blue-50 text-blue-600': 'text-gray-600 hover:bg-gray-100' }`}
            >
              {item.name}
            </NavLink>
          ))}

            {/* <Link to= '/dashboard' className='block rounded-lg bg-blue-50 px-4 py-3 text-blue-600 font-medium'>Dashboard</Link>
            <Link to='/rewards' className='block rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-600 font-medium'>Rewards</Link>
            <Link to='/transactions' className='block rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-600 font-medium'>Transactions</Link>
            <Link to='/profile' className='block rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-600 font-medium'>Profile</Link> */}
        </nav>
    </aside>
  )
}
