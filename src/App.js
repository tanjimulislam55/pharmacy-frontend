import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SidebarProvider } from './contexts/sidebarContext'
import { Home, Vendor, Bill, Customer, Medicine, Stock } from './pages'

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
                </Routes>
            </BrowserRouter>
        </SidebarProvider>
    )
}

export default App
