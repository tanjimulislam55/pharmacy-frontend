import { useEffect, useState } from 'react'
import { Sidebar } from '.'
import classes from '../App.module.css'


export default function Medicine() {

  const [name, setName] = useState('')
  const [vendors, setVendors] = useState([])
  const [types, setTypes] = useState([])
  const [units, setUnits] = useState([])
  const [categories, setCategories] = useState([])
  const [vendorId, setVendorId] = useState()
  const [typeId, setTypeId] = useState()
  const [unitId, setUnitId] = useState()
  const [categorieId, setCategorieId] = useState()
  const [medicines, setMedicines] = useState([])


  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/types`)
      const data = await response.json()
      setTypes(data)
    }
    fetchData()
    return () => {
      fetchData()
      controller.abort()
    }
  }, [])

  
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/units`)
      const data = await response.json()
      setUnits(data)
    }
    fetchData()
    return () => {
      fetchData()
      controller.abort()
    }
  }, [])


  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/categories`)
      const data = await response.json()
      setCategories(data)
    }
    fetchData()
    return () => {
      fetchData()
      controller.abort()
    }
  }, [])


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/units`)
      const data = await response.json()
      setUnits(data)
    }
    return fetchData()
  }, [])
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const details = {
      name,
      "vendor_id": vendorId,
      "unit_id": unitId,
      "type_id": typeId,
      "category_id": categorieId
    }
    if (vendorId === undefined || unitId === undefined || typeId === undefined || categorieId === undefined) {
      return console.log("select all")
    }
    fetch(`${process.env.REACT_APP_API_URL}/add_medicine`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    })
  }
  
    useEffect(() => {
      const controller = new AbortController();
      const fetchData = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/medicines`)
        const data = await response.json()
        setMedicines(data)
      }
      fetchData()
      return () => {
        fetchData()
        controller.abort()
      }
    }, [])


  return (
    <>
      <Sidebar/>
      <div className={classes.content}>
        <form className={classes.item} onSubmit={handleSubmit}>
          <h2>Add New Medicine</h2>
          <input
            placeholder="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="types">Select type</label>
          <select onChange={(e) => setTypeId(e.target.value)} id="types">
            <option value="">select</option>
            {
              types.map((type, i) =>
                (<option key={i} value={type.id}>{type.name}</option>)
              )
            }
          </select>
          <label htmlFor="categories">Select category</label>
          <select onChange={(e) => setCategorieId(e.target.value)} id="categories">
            <option value="">select</option>
            {
              categories.map((category, i) =>
                (<option key={i} value={category.id}>{category.name}</option>)
              )
            }
          </select>
          <label htmlFor="units">Select unit</label>
          <select onChange={(e) => setUnitId(e.target.value)} id="units">
            <option value="">select</option>
            {
              units.map((unit, i) =>
                (<option key={i} value={unit.id}>{unit.name}</option>)
              )
            }
          </select>
          <label htmlFor="vendors">Select vendor</label>
          <select onChange={(e) => setVendorId(e.target.value)} id="vendors">
            <option value="">select</option>
            {
              vendors.map((vendor, i) =>
                (<option key={i} value={vendor.id}>{vendor.name}</option>)
              )
            }
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={classes.content}>
        {
          medicines.map((medicine) => (
            <div className={classes.item} key={medicine.id}>
              <h4>{medicine.name}</h4>
            </div>
          ))
        }
      </div>
    </>
  )
}