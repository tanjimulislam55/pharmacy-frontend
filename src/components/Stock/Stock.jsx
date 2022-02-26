import { useState, useEffect } from 'react'
import StockList from './StockList/StockList'

export default function Stock() {
    const [stocks, setStocks] = useState([])
    const [medicines, setMedicines] = useState([])

    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/stocks`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            setStocks(data)
        }
        return fetchData()
    }, [token])

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/medicines`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            setMedicines(data)
        }
        fetchData()
        return () => {
            fetchData()
            controller.abort()
        }
    }, [token])

    return <div>{medicines && stocks && <StockList stocks={stocks} medicines={medicines} />}</div>
}

/* {filteredMedicine.id === stock.medicine_id ? (
                                        <td>{get_matched_stock(stocks, filteredMedicine.id)?.id}</td>
                                    ) : (
                                        ''
                                    )}
                                    {filteredMedicine.id === stock.medicine_id ? (
                                        <td>{filteredMedicine.brand_name}</td>
                                    ) : (
                                        ''
                                    )}
                                    {filteredMedicine.id === stock.medicine_id ? (
                                        <td>{filteredMedicine.generic_name}</td>
                                    ) : (
                                        ''
                                    )}
                                    {filteredMedicine.id === stock.medicine_id ? (
                                        <td>{get_matched_stock(stocks, filteredMedicine.id)?.in_stock}</td>
                                    ) : null}
                                    {filteredMedicine.id === stock.medicine_id ? (
                                        <td>
                                            {get_matched_stock(stocks, filteredMedicine.id)?.last_purchased_quantity}
                                        </td>
                                    ) : (
                                        ''
                                    )}

                                    {filteredMedicine.id === stock.medicine_id ? (
                                        <td>
                                            {(e) => formattedDate(e, filteredMedicine.id)}
                                            {get_matched_stock(stocks, filteredMedicine.id)?.last_date_of_purchase}
                                        </td>
                                    ) : (
                                        ''
                                    )}

                                    {filteredMedicine.id === stock.medicine_id ? (
                                        <td className="select">
                                            <Link className={classes.icon} to="#">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Link>
                                            <Link className={classes.icon} to="#">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </Link>
                                        </td>
                                    ) : (
                                        ''
                                    )} */
