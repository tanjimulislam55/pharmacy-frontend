import { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'
import { InvoicePrint } from './components/Pdf/InvoicePdf/InvoicePrint'
import { PurchasePrint } from './components/Pdf/PurchasePdf/PurchasePrint'
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
    Manufacturer,
    Grn,
    GrnForm,
    Setting,
    LandingPage,
} from './pages'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
    const [stateAuth, dispatchAuth] = useReducer(authReducer, authState)
    const [stateUser, dispatchUser] = useReducer(userReducer, userState)

    return (
        <SidebarProvider>
            <Auth.Provider value={{ stateAuth, dispatchAuth }}>
                <UserInfo.Provider value={{ stateUser, dispatchUser }}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/registration" element={<Registration />} />
                        <Route path="/login" element={<Login />} />

                        <Route path="/*" element={<ProtectedRoute />}>
                            <Route path="invoice_pdf" element={<InvoicePrint />} />
                            <Route path="purchase_pdf" element={<PurchasePrint />} />
                            <Route path="dashboard" element={<Home />} />
                            <Route path="medicine" element={<Medicine />} />
                            <Route path="vendor" element={<Vendor />} />
                            <Route path="customer" element={<Customer />} />
                            <Route path="bill" element={<Bill />} />
                            <Route path="bill/billform" element={<BillForm />} />
                            <Route path="stock" element={<Stock />} />
                            <Route path="expense" element={<Expense />} />
                            <Route path="purchase" element={<Purchase />} />
                            <Route path="purchase/purchaseform" element={<PurchaseForm />} />
                            <Route path="grn" element={<Grn />} />
                            <Route path="grn/grnform" element={<GrnForm />} />
                            <Route path="reports" element={<Report />} />
                            <Route path="accounts" element={<Admin />} />
                            <Route path="manufacturer" element={<Manufacturer />} />
                            <Route path="settings" element={<Setting />} />
                        </Route>
                    </Routes>
                </UserInfo.Provider>
            </Auth.Provider>
        </SidebarProvider>
    )
}

export default App
