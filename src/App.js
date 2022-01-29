import { useReducer } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Auth, UserInfo } from './contexts/allContex'
import { authReducer, authState } from './contexts/reducer/authReducer'
import { userReducer, userState } from './contexts/reducer/userReducer'
import { SidebarProvider } from './contexts/sidebarContext'
import {
    Home,
    Vendor,
    Bill,
    Customer,
    Medicine,
    Stock,
    Expense,
    Purchase,
    Report,
    Admin,
    BillForm,
    PurchaseForm,
    Login,
    Registration,
} from './pages'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
    const [stateAuth, dispatchAuth] = useReducer(authReducer, authState)
    const [stateUser, dispatchUser] = useReducer(userReducer, userState)

    return (
        <SidebarProvider>
            <BrowserRouter>
                <Auth.Provider value={{ stateAuth, dispatchAuth }}>
                    <UserInfo.Provider value={{ stateUser, dispatchUser }}>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/registration" element={<Registration />} />

                            <Route path="/" element={<Home />} />
                            <Route path="/medicine" element={<Medicine />} />
                            <Route path="/vendor" element={<Vendor />} />
                            <Route path="/customer" element={<Customer />} />
                            <Route path="/bill" element={<Bill />} />
                            <Route path="/bill/billform" element={<BillForm />} />
                            <Route path="/stock" element={<Stock />} />
                            <Route path="/expense" element={<Expense />} />
                            <Route path="/purchase" element={<Purchase />} />
                            <Route path="/purchase/purchaseform" element={<PurchaseForm />} />
                            <Route path="/reports" element={<Report />} />
                            <Route path="/accounts" element={<Admin />} />
                        </Routes>
                    </UserInfo.Provider>
                </Auth.Provider>
            </BrowserRouter>
        </SidebarProvider>
    )
}

export default App
