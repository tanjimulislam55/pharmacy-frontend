import React from 'react'
import AdminLayout from './AdminLayout/AdminLayout'
import AdminDashboard from './DashboardItem/AdminDashboard'
import PharmacyList from './Pharmacies/PharmacyList'

export default function SuperAdmin() {
    return (
        <div>
            <AdminLayout>
                <AdminDashboard />
                <PharmacyList />
            </AdminLayout>
        </div>
    )
}
