import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bill from './components/Bill/Bill'
import Category from './components/Category/Category'
import Customer from './components/Customer/Customer'
import Home from './components/Home/Home'
import Medicine from './components/Medicine/Medicine'
import Purchase from './components/Purchase/Purchase'
import Type from './components/Type/Type'
import Unit from './components/Unit/Unit'
import Vendor from './components/Vendor/Vendor'

// import Login from './components/Login/Login'
// import Index from './components/Index/Index'
// import PurchaseLines from './components/PurchaseLines/PurchaseLines'
// import Sidebar from './components/Sidebar/Sidebar'

function App() {
    return (
        <BrowserRouter>
            {/* <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes> */}
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/add_vendor" element={<Vendor />} />
                <Route path="/add_type" element={<Type />} />
                <Route path="/add_category" element={<Category />} />
                <Route path="/add_unit" element={<Unit />} />
                <Route path="/add_medicine" element={<Medicine />} />
                <Route path="/add_purchase" element={<Purchase />} />
                <Route path="/add_customer" element={<Customer />} />
                <Route path="/add_bill" element={<Bill />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
