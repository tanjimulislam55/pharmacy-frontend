import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Vendor, Type, Category, Unit, Medicine, Purchase, Customer, Bill, Dashboard } from './components'
import { SidebarProvider } from './contexts/sidebarContext'

function App() {
    return (
        <SidebarProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
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
        </SidebarProvider>
    )
}

export default App
