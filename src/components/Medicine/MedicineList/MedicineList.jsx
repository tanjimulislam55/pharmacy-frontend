import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Pagination } from '../../../components'
import classes from './MedicineList.module.css'

export default function MedicineList({ medicines, manufacturers, setIsOpenForm }) {
    const getName = (elements, id) => {
        const items = elements.find((element) => element.id === id)
        return items
    }

    const [searched, setSearched] = useState('')
    const [startIdx, setStartIdx] = useState(0)
    const [endIdx, setEndIdx] = useState(10)

    return (
        <div className={classes.tableContainer}>
            <div className={classes.wrapper}>
                <form action="">
                    <input
                        onChange={(e) => setSearched(e.target.value)}
                        value={searched}
                        className={classes.searchField}
                        type="text"
                        placeholder="Search medicine"
                        name="search"
                    />
                    <button className={classes.searchButton} type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <button className={classes.button} onClick={() => setIsOpenForm(true)}>
                    + Add Medicine
                </button>
            </div>

            <table className={classes.tableMain}>
                <tr className={classes.tableRow}>
                    <th>ID</th>
                    <th>Brand Name</th>
                    <th>Generic Name</th>
                    <th>Dosage Form</th>
                    <th>Strength</th>
                    <th>Unit Price (TK)</th>
                    <th>Manufacturer</th>
                </tr>
                {(medicines, manufacturers) &&
                    medicines
                        .filter(
                            (medicine) =>
                                medicine.brand_name.toLowerCase().includes(searched) ||
                                medicine.generic_name.toLowerCase().includes(searched) ||
                                medicine.dosage_form.toLowerCase().includes(searched)
                        )
                        .splice(startIdx, endIdx)
                        .map((filteredMedicine) => (
                            <tr key={filteredMedicine.id} className={classes.tableRow}>
                                <td data-title="id">{filteredMedicine.id}</td>
                                <td data-title="brand_name">{filteredMedicine.brand_name}</td>
                                <td data-title="generic_name">{filteredMedicine.generic_name}</td>
                                <td data-title="dosage_form">{filteredMedicine.dosage_form}</td>
                                <td data-title="strength">{filteredMedicine.strength}</td>
                                <td data-title="unit_price">{filteredMedicine.unit_price}</td>
                                <td data-title="manufacturer">
                                    {getName(manufacturers, filteredMedicine.manufacturer_id)?.name}
                                </td>
                            </tr>
                        ))}
            </table>
            <Pagination
                setStartIdx={setStartIdx}
                setEndIdx={setEndIdx}
                page={
                    medicines &&
                    medicines.filter((medicine) => medicine.brand_name.toLowerCase().includes(searched)).length
                }
            />
        </div>
    )
}
