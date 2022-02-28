import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { Layout, Setting } from '../components'

export default function SettingPage() {
    const [medicines, setMedicines] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/medicines/search/brand_name/?skip=0&limit=10&name_str=${search}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            const data = await response.json()
            setMedicines(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [token, search])

    const handler = (search) => {
        let matches = []
        if (search.length > 0) {
            matches = medicines.filter((med) =>
                // const regex = new RegExp(`${search}`, 'gi')
                // return med.brand_name.match(regex)
                med.brand_name.toLowerCase().includes(search)
            )
        }
        setSearch(search)
        setSearchResults(matches)
    }

    const setHandle = (search) => {
        setSearch(search)
        setSearchResults([])
        console.log('d2', search)
    }

    return (
        <div>
            <Layout>
                <Setting />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={search.id}
                        placeholder={search.brand_name}
                        onChange={(e) => handler(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
                {searchResults &&
                    searchResults.map((medicine, i) => (
                        <label
                            htmlFor="medicine.id"
                            key={i}
                            onClick={() => setHandle(medicine)}
                            value={medicine.id}
                            onChange={(e) => handleSubmit(medicine.id)}>
                            {medicine.brand_name}
                        </label>
                    ))}
            </Layout>
        </div>
    )
}
