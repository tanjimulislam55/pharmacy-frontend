import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SidebarProvider } from './contexts/sidebarContext'
import { Home, Vendor, Bill, Customer, Medicine, Stock, Expense, Purchase, Report, Admin } from './pages'

function App() {
    return (
        <SidebarProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/vendor" element={<Vendor />} />
                    <Route path="/medicine" element={<Medicine />} />
                    <Route path="/customer" element={<Customer />} />
                    <Route path="/bill" element={<Bill />} />
                    <Route path="/stock" element={<Stock />} />
                    <Route path="/expense" element={<Expense />} />
                    <Route path="/purchase" element={<Purchase />} />
                    <Route path="/purchase" element={<Purchase />} />
                    <Route path="/reports" element={<Report />} />
                    <Route path="/accounts" element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </SidebarProvider>
    )
}

export default App
