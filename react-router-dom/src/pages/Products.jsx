import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div className='flex justify-center gap-10 py-4'>
        <Link to='/product/men'>Men</Link>
        <Link to='/product/women'>Women</Link>
      <Outlet />
    </div>
  )
}

export default Products
