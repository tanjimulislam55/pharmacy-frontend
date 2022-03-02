import React, { useEffect, useState } from 'react'
import AdminLayout from './AdminLayout/AdminLayout'
import AdminDashboard from './DashboardItem/AdminDashboard'
import PharmacyList from './Pharmacies/PharmacyList'

export default function SuperAdmin() {
    const [pharmacyLists, setPharmacyLists] = useState([])

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token
    const api = process.env.REACT_APP_API_URL

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${api}/users/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            setPharmacyLists(data)
        }
        return fetchData()
    }, [api, token])

    return (
        <div>
            <AdminLayout>
                <AdminDashboard />
                <br />
                <PharmacyList
                    pharmacyLists={pharmacyLists}
                    headerList={{ name: 'Name', mobile: 'Mobile', email: 'Email', status: 'Status', action: 'Action' }}
                    activeStatus={{ status: false, action: 'Pending' }}
                />
                <br />
                <br />
                <PharmacyList
                    pharmacyLists={pharmacyLists}
                    headerList={{ name: 'Name', mobile: 'Mobile', email: 'Email', status: 'Status', action: 'Action' }}
                    activeStatus={{ status: true, action: 'Active' }}
                />
            </AdminLayout>
        </div>
    )
}
