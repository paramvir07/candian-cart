import React from 'react'
import StoreSidebar from '@/components/shop/StoreSidebar'
import DashboardHome from '@/components/shop/Dashboard'

const store = () => {
  return (
    <div className="flex min-h-screen">
            <StoreSidebar />
      <main className="flex-1 p-6">
       <DashboardHome/>
      </main>

    {/* 
        Orders
            ordered by username
            previous orders
            Return/refund
            previous orders
        Products
            add products
            edit products
            delete products
            Out of stock
            Change Images
        Information
            change store information
            Location
            Contact information
        Prmotions
            add new promomotions
            edit promotions
            delete promotions
        Analytics
            sales data
            customer data
        



            backend
            Products
            cart
            orders
            promotions
            
    */}

    </div>
  )
}

export default store
